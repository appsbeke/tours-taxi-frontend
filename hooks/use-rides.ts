import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { Ride, ApiResponse, PaginatedResponse, Location } from '@/types';
import { toast } from 'sonner';

interface CreateRideData {
  pickupLocation: Location;
  dropoffLocation: Location;
  vehicleType: string;
  scheduledTime?: string;
}

export const useRides = () => {
  const queryClient = useQueryClient();

  const { data: rides, isLoading } = useQuery({
    queryKey: ['rides'],
    queryFn: async () => {
      const response = await apiClient.get<PaginatedResponse<Ride>>('/api/rides');
      return response.data.data;
    },
  });

  const createRideMutation = useMutation({
    mutationFn: async (data: CreateRideData) => {
      const response = await apiClient.post<ApiResponse<Ride>>('/api/rides', data);
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rides'] });
      toast.success('Ride booked successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to book ride');
    },
  });

  const cancelRideMutation = useMutation({
    mutationFn: async (rideId: string) => {
      const response = await apiClient.patch<ApiResponse<Ride>>(
        `/api/rides/${rideId}/cancel`
      );
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rides'] });
      toast.success('Ride cancelled successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to cancel ride');
    },
  });

  const getRide = (rideId: string) => {
    return useQuery({
      queryKey: ['ride', rideId],
      queryFn: async () => {
        const response = await apiClient.get<ApiResponse<Ride>>(`/api/rides/${rideId}`);
        return response.data.data;
      },
      enabled: !!rideId,
    });
  };

  return {
    rides,
    isLoading,
    createRide: createRideMutation.mutate,
    isCreating: createRideMutation.isPending,
    cancelRide: cancelRideMutation.mutate,
    isCancelling: cancelRideMutation.isPending,
    getRide,
  };
};
