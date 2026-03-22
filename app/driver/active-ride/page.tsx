'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Navigation, CheckCircle, User } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ActiveRide() {
  const [activeRide, setActiveRide] = useState<{
    id: string;
    customer: { name: string; phone: string; rating: number };
    pickup: string;
    dropoff: string;
    status: string;
    fare: number;
  } | null>({
    id: '1',
    customer: {
      name: 'John Doe',
      phone: '+1 234 567 8900',
      rating: 4.8,
    },
    pickup: '123 Main St, Downtown',
    dropoff: 'International Airport',
    status: 'ongoing',
    fare: 45.00,
  });

  const handleCompleteRide = () => {
    toast.success('Ride completed successfully!');
    setActiveRide(null);
  };

  if (!activeRide) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Active Ride</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You don&apos;t have any active rides at the moment.
            </p>
            <Button>View Ride Requests</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Active Ride</h1>
        <p className="text-gray-600 dark:text-gray-400">Navigate to your destination</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <Card className="lg:col-span-2 p-6">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Map integration placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Google Maps API key required</p>
            </div>
          </div>
        </Card>

        {/* Ride Details */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Customer Details</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">{activeRide.customer.name}</p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{activeRide.customer.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Call Customer
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Trip Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pickup</p>
                <p className="font-medium">{activeRide.pickup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dropoff</p>
                <p className="font-medium">{activeRide.dropoff}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Fare</p>
                <p className="text-2xl font-bold text-green-600">${activeRide.fare.toFixed(2)}</p>
              </div>
            </div>
          </Card>

          <Button onClick={handleCompleteRide} className="w-full bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            Complete Ride
          </Button>
        </div>
      </div>
    </div>
  );
}
