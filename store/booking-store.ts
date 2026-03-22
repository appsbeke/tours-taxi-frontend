import { create } from 'zustand';
import { Location } from '@/types';

interface BookingState {
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  vehicleType: string;
  scheduledTime: string | null;
  setPickupLocation: (location: Location | null) => void;
  setDropoffLocation: (location: Location | null) => void;
  setVehicleType: (type: string) => void;
  setScheduledTime: (time: string | null) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  pickupLocation: null,
  dropoffLocation: null,
  vehicleType: 'standard',
  scheduledTime: null,
  setPickupLocation: (location) => set({ pickupLocation: location }),
  setDropoffLocation: (location) => set({ dropoffLocation: location }),
  setVehicleType: (type) => set({ vehicleType: type }),
  setScheduledTime: (time) => set({ scheduledTime: time }),
  reset: () => set({
    pickupLocation: null,
    dropoffLocation: null,
    vehicleType: 'standard',
    scheduledTime: null,
  }),
}));
