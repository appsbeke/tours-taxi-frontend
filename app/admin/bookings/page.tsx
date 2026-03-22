'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign } from 'lucide-react';

export default function AdminBookings() {
  const bookings = [
    { id: '1', type: 'ride', customer: 'John Doe', service: 'Airport Transfer', date: '2026-03-25', amount: 45, status: 'completed' },
    { id: '2', type: 'tour', customer: 'Jane Smith', service: 'Historical Tour', date: '2026-03-26', amount: 180, status: 'confirmed' },
    { id: '3', type: 'ride', customer: 'Mike Wilson', service: 'City Ride', date: '2026-03-27', amount: 28, status: 'pending' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Bookings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage rides and tour bookings</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full uppercase">
                    {booking.type}
                  </span>
                  <h3 className="font-bold">{booking.service}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">Customer: {booking.customer}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {booking.date}
                  </div>
                  <div className="flex items-center font-semibold text-green-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ${booking.amount}
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                    booking.status === 'confirmed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm" className="text-red-600">Cancel</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
