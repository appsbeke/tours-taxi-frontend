'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, User, Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface RideRequest {
  id: string;
  customer: {
    name: string;
    rating: number;
  };
  pickup: string;
  dropoff: string;
  distance: number;
  fare: number;
  estimatedDuration: number;
  requestedAt: string;
}

export default function RideRequests() {
  const [requests, setRequests] = useState<RideRequest[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    setRequests([
      {
        id: '1',
        customer: { name: 'John Doe', rating: 4.8 },
        pickup: '123 Main St, Downtown',
        dropoff: 'International Airport',
        distance: 15.5,
        fare: 45.00,
        estimatedDuration: 25,
        requestedAt: new Date().toISOString(),
      },
      {
        id: '2',
        customer: { name: 'Jane Smith', rating: 4.9 },
        pickup: '456 Oak Ave, Midtown',
        dropoff: '789 Pine Blvd, Uptown',
        distance: 8.2,
        fare: 28.50,
        estimatedDuration: 15,
        requestedAt: new Date().toISOString(),
      },
    ]);
  }, []);

  const handleAccept = async (requestId: string) => {
    setLoading(true);
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Ride request accepted!');
      setRequests(prev => prev.filter(r => r.id !== requestId));
    } catch {
      toast.error('Failed to accept ride request');
    } finally {
      setLoading(false);
    }
  };

  const handleDecline = async (requestId: string) => {
    setLoading(true);
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.info('Ride request declined');
      setRequests(prev => prev.filter(r => r.id !== requestId));
    } catch {
      toast.error('Failed to decline ride request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Ride Requests</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Accept or decline incoming ride requests
        </p>
      </div>

      {requests.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Ride Requests</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You don&apos;t have any pending ride requests at the moment. Make sure you&apos;re online to receive requests.
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          {requests.map((request) => (
            <Card key={request.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Request Details */}
                <div className="flex-1 space-y-4">
                  {/* Customer Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{request.customer.name}</p>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{request.customer.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Pickup</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{request.pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Dropoff</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{request.dropoff}</p>
                      </div>
                    </div>
                  </div>

                  {/* Trip Info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{request.distance} km</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{request.estimatedDuration} min</span>
                    </div>
                    <div className="flex items-center font-semibold text-green-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>${request.fare.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex lg:flex-col gap-3">
                  <Button
                    onClick={() => handleAccept(request.id)}
                    disabled={loading}
                    className="flex-1 lg:w-32 bg-green-600 hover:bg-green-700"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Accept
                  </Button>
                  <Button
                    onClick={() => handleDecline(request.id)}
                    disabled={loading}
                    variant="outline"
                    className="flex-1 lg:w-32 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Decline
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
