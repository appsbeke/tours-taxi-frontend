'use client';

import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

export default function GuideEarnings() {
  const earnings = {
    today: 240.00,
    week: 1235.50,
    month: 4235.00,
    total: 28640.00,
  };

  const recentTours = [
    { id: '1', date: '2026-03-22', tour: 'Historical City Tour', participants: 12, amount: 540.00 },
    { id: '2', date: '2026-03-20', tour: 'Beach Sunset Tour', participants: 10, amount: 400.00 },
    { id: '3', date: '2026-03-18', tour: 'Mountain Hiking', participants: 8, amount: 600.00 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Earnings</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your tour income</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">${earnings.today.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Today</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">${earnings.week.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">This Week</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">${earnings.month.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">${earnings.total.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Recent Tours</h2>
        <div className="space-y-4">
          {recentTours.map((tour) => (
            <div key={tour.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">{tour.tour}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tour.date} • {tour.participants} participants
                </p>
              </div>
              <p className="font-semibold text-green-600">${tour.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
