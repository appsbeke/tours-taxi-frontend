'use client';

import { Card } from '@/components/ui/card';
import { Users, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GuideBookings() {
  const bookings = [
    {
      id: '1',
      customer: 'Sarah Johnson',
      tour: 'Historical City Walking Tour',
      date: '2026-03-25',
      participants: 4,
      amount: 180,
      status: 'confirmed',
    },
    {
      id: '2',
      customer: 'Mike Wilson',
      tour: 'Mountain Hiking Adventure',
      date: '2026-03-26',
      participants: 2,
      amount: 150,
      status: 'confirmed',
    },
    {
      id: '3',
      customer: 'Emma Davis',
      tour: 'Beach Sunset Tour',
      date: '2026-03-28',
      participants: 6,
      amount: 240,
      status: 'pending',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tour Bookings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage customer bookings</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{booking.tour}</h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'confirmed'
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                  }`}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">Customer: {booking.customer}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {booking.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    {booking.participants} participants
                  </div>
                  <div className="flex items-center font-semibold text-green-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ${booking.amount}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View Details</Button>
                {booking.status === 'pending' && (
                  <Button size="sm">Confirm</Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
