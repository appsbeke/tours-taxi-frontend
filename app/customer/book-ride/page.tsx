'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRides } from '@/hooks/use-rides';
import { useBookingStore } from '@/store/booking-store';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Car } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const bookingSchema = z.object({
  pickupAddress: z.string().min(3, 'Pickup address is required'),
  dropoffAddress: z.string().min(3, 'Dropoff address is required'),
  vehicleType: z.string(),
  scheduledTime: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const vehicleTypes = [
  { value: 'standard', label: 'Standard', price: 15, icon: '🚗' },
  { value: 'comfort', label: 'Comfort', price: 25, icon: '🚙' },
  { value: 'premium', label: 'Premium', price: 40, icon: '🚐' },
  { value: 'luxury', label: 'Luxury', price: 60, icon: '🏎️' },
];

export default function BookRidePage() {
  const router = useRouter();
  const { createRide, isCreating } = useRides();
  const { vehicleType, setVehicleType } = useBookingStore();
  const [estimatedFare, setEstimatedFare] = useState(0);
  const [distance, setDistance] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      vehicleType: vehicleType || 'standard',
    },
  });

  const selectedVehicleType = watch('vehicleType');
  const pickupAddress = watch('pickupAddress');
  const dropoffAddress = watch('dropoffAddress');

  // Simulate fare estimation
  useEffect(() => {
    if (pickupAddress && dropoffAddress) {
      const randomDistance = Math.floor(Math.random() * 20) + 5;
      setDistance(randomDistance);
      
      const selectedVehicle = vehicleTypes.find(v => v.value === selectedVehicleType);
      const baseFare = selectedVehicle?.price || 15;
      const calculatedFare = baseFare + (randomDistance * 2);
      setEstimatedFare(calculatedFare);
    }
  }, [pickupAddress, dropoffAddress, selectedVehicleType]);

  const onSubmit = (data: BookingForm) => {
    // In a real app, you'd geocode these addresses
    createRide({
      pickupLocation: {
        latitude: 0,
        longitude: 0,
        address: data.pickupAddress,
      },
      dropoffLocation: {
        latitude: 0,
        longitude: 0,
        address: data.dropoffAddress,
      },
      vehicleType: data.vehicleType,
      scheduledTime: data.scheduledTime,
    });
    
    // Redirect to bookings after successful creation
    setTimeout(() => {
      router.push('/customer/bookings?tab=rides');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Book a Ride</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <Label htmlFor="pickupAddress">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="pickupAddress"
                    placeholder="Enter pickup address"
                    className="pl-10"
                    {...register('pickupAddress')}
                  />
                </div>
                {errors.pickupAddress && (
                  <p className="text-sm text-red-500">{errors.pickupAddress.message}</p>
                )}
              </div>

              {/* Dropoff Location */}
              <div className="space-y-2">
                <Label htmlFor="dropoffAddress">Dropoff Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="dropoffAddress"
                    placeholder="Enter dropoff address"
                    className="pl-10"
                    {...register('dropoffAddress')}
                  />
                </div>
                {errors.dropoffAddress && (
                  <p className="text-sm text-red-500">{errors.dropoffAddress.message}</p>
                )}
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <Label>Vehicle Type</Label>
                <Controller
                  name="vehicleType"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-2 gap-3">
                      {vehicleTypes.map((vehicle) => (
                        <button
                          key={vehicle.value}
                          type="button"
                          onClick={() => {
                            field.onChange(vehicle.value);
                            setVehicleType(vehicle.value);
                          }}
                          className={`p-4 border rounded-lg text-left transition ${
                            field.value === vehicle.value
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <div className="text-2xl mb-1">{vehicle.icon}</div>
                          <div className="font-medium">{vehicle.label}</div>
                          <div className="text-sm text-muted-foreground">
                            From ${vehicle.price}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                />
              </div>

              {/* Scheduled Time (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="scheduledTime">Schedule for Later (Optional)</Label>
                <Input
                  id="scheduledTime"
                  type="datetime-local"
                  {...register('scheduledTime')}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isCreating}>
                {isCreating ? 'Booking...' : 'Confirm Booking'}
              </Button>
            </form>
          </Card>
        </div>

        {/* Fare Estimate */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h3 className="font-semibold mb-4">Fare Estimate</h3>
            
            {estimatedFare > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-muted-foreground">Distance</span>
                  <span className="font-medium">{distance} km</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-muted-foreground">Vehicle Type</span>
                  <span className="font-medium capitalize">{selectedVehicleType}</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-muted-foreground">Est. Duration</span>
                  <span className="font-medium">{Math.ceil(distance / 3)} min</span>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-semibold">Total Fare</span>
                  <span className="text-2xl font-bold text-primary">
                    ${estimatedFare.toFixed(2)}
                  </span>
                </div>

                <div className="bg-muted p-3 rounded-lg text-sm text-muted-foreground">
                  <p>💡 Final fare may vary based on actual route and traffic conditions</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <Car className="h-12 w-12 mx-auto mb-2 opacity-30" />
                <p>Enter locations to see fare estimate</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
