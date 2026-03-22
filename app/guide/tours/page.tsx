'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, DollarSign, Star } from 'lucide-react';


export default function GuideTours() {
  const tours = [
    {
      id: '1',
      title: 'Historical City Walking Tour',
      description: 'Explore the rich history of our city',
      location: 'Downtown',
      duration: 3,
      price: 45,
      maxParticipants: 15,
      rating: 4.9,
      reviewCount: 87,
      status: 'active',
    },
    {
      id: '2',
      title: 'Mountain Hiking Adventure',
      description: 'Breathtaking views and fresh mountain air',
      location: 'North Peak',
      duration: 5,
      price: 75,
      maxParticipants: 10,
      rating: 4.8,
      reviewCount: 62,
      status: 'active',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Tours</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your tour offerings</p>
        </div>
        <Button>Create New Tour</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <Card key={tour.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">{tour.title}</h3>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                {tour.status}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{tour.description}</p>

            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                {tour.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                {tour.duration} hours
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 mr-2" />
                Max {tour.maxParticipants}
              </div>
              <div className="flex items-center font-semibold text-green-600">
                <DollarSign className="h-4 w-4 mr-1" />
                ${tour.price}
              </div>
            </div>

            <div className="flex items-center mb-4 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium mr-1">{tour.rating.toFixed(1)}</span>
              <span className="text-gray-600 dark:text-gray-400">({tour.reviewCount} reviews)</span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
              <Button variant="outline" size="sm" className="flex-1">View Bookings</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
