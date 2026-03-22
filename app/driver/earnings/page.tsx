'use client';

import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Earnings() {
  const earnings = {
    today: 125.50,
    week: 847.25,
    month: 3421.75,
    total: 15234.00,
  };

  const recentPayouts = [
    { id: '1', date: '2026-03-15', amount: 847.25, status: 'completed' },
    { id: '2', date: '2026-03-08', amount: 923.50, status: 'completed' },
    { id: '3', date: '2026-03-01', amount: 1102.00, status: 'completed' },
  ];

  const recentRides = [
    { id: '1', date: '2026-03-22 08:30', route: 'Downtown → Airport', amount: 45.00 },
    { id: '2', date: '2026-03-22 06:15', route: 'Midtown → Downtown', amount: 28.50 },
    { id: '3', date: '2026-03-21 18:45', route: 'Airport → Hotel District', amount: 52.00 },
    { id: '4', date: '2026-03-21 14:20', route: 'Shopping Mall → Residential', amount: 18.75 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Earnings</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your income and payouts</p>
      </div>

      {/* Earnings Summary */}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payouts */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Payouts</h2>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <div className="space-y-4">
            {recentPayouts.map((payout) => (
              <div key={payout.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">${payout.amount.toFixed(2)}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{payout.date}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  {payout.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Rides */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Recent Rides</h2>
          <div className="space-y-4">
            {recentRides.map((ride) => (
              <div key={ride.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{ride.route}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{ride.date}</p>
                </div>
                <p className="font-semibold text-green-600">${ride.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
