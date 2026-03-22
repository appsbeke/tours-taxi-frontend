'use client';

import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export default function GuideSchedule() {
  const scheduledTours = [
    {
      id: '1',
      date: '2026-03-25',
      time: '10:00 AM',
      title: 'Historical City Walking Tour',
      participants: 12,
      location: 'Downtown',
      duration: 3,
    },
    {
      id: '2',
      date: '2026-03-26',
      time: '08:00 AM',
      title: 'Mountain Hiking Adventure',
      participants: 8,
      location: 'North Peak',
      duration: 5,
    },
    {
      id: '3',
      date: '2026-03-28',
      time: '02:00 PM',
      title: 'Beach Sunset Tour',
      participants: 10,
      location: 'South Beach',
      duration: 2,
    },
    {
      id: '4',
      date: '2026-03-30',
      time: '09:00 AM',
      title: 'Food & Culture Tour',
      participants: 15,
      location: 'Old Town',
      duration: 4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tour Schedule</h1>
        <p className="text-gray-600 dark:text-gray-400">Your upcoming tour calendar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {scheduledTours.map((tour) => (
          <Card key={tour.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold mb-1">{tour.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tour.date} at {tour.time}</p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                {tour.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 mr-2" />
                {tour.participants} participants
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                {tour.duration} hours
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
