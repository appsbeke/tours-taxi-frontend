'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Plus, MapPin, DollarSign } from 'lucide-react';

export default function AdminTours() {
  const tours = [
    { id: '1', title: 'Historical City Tour', guide: 'Mike Wilson', price: 45, duration: 3, location: 'Downtown', status: 'active' },
    { id: '2', title: 'Mountain Hiking', guide: 'Sarah Lee', price: 75, duration: 5, location: 'North Peak', status: 'active' },
    { id: '3', title: 'Beach Sunset Tour', guide: 'Tom Harris', price: 40, duration: 2, location: 'South Beach', status: 'inactive' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tour Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all tour offerings</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Tour
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <Card key={tour.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Map className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                tour.status === 'active'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}>
                {tour.status}
              </span>
            </div>

            <h3 className="font-bold text-lg mb-1">{tour.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Guide: {tour.guide}</p>

            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                {tour.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                {tour.duration}h
              </div>
              <div className="flex items-center font-semibold text-green-600">
                <DollarSign className="h-4 w-4 mr-1" />
                ${tour.price}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
              <Button variant="outline" size="sm" className="flex-1">Bookings</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
