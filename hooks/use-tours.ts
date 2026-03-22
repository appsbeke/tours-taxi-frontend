import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { Tour, TourBooking, ApiResponse, PaginatedResponse } from '@/types';
import { toast } from 'sonner';

interface BookTourData {
  tourId: string;
  participants: number;
  date: string;
}

export const useTours = () => {
  const queryClient = useQueryClient();

  const { data: tours, isLoading } = useQuery({
    queryKey: ['tours'],
    queryFn: async () => {
      const response = await apiClient.get<PaginatedResponse<Tour>>('/api/tours');
      return response.data.data;
    },
  });

  const getTour = (tourId: string) => {
    return useQuery({
      queryKey: ['tour', tourId],
      queryFn: async () => {
        const response = await apiClient.get<ApiResponse<Tour>>(`/api/tours/${tourId}`);
        return response.data.data;
      },
      enabled: !!tourId,
    });
  };

  const bookTourMutation = useMutation({
    mutationFn: async (data: BookTourData) => {
      const response = await apiClient.post<ApiResponse<TourBooking>>(
        '/api/tour-bookings',
        data
      );
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tour-bookings'] });
      toast.success('Tour booked successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to book tour');
    },
  });

  const { data: myBookings } = useQuery({
    queryKey: ['tour-bookings'],
    queryFn: async () => {
      const response = await apiClient.get<PaginatedResponse<TourBooking>>(
        '/api/tour-bookings/my-bookings'
      );
      return response.data.data;
    },
  });

  return {
    tours,
    isLoading,
    getTour,
    bookTour: bookTourMutation.mutate,
    isBooking: bookTourMutation.isPending,
    myBookings,
  };
};
