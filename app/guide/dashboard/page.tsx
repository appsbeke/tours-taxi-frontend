'use client';

import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { DollarSign, Star, Users, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GuideDashboard() {
  const { currentUser } = useAuth();

  const stats = {
    upcomingTours: 8,
    totalBookings: 156,
    monthEarnings: 4235.00,
    rating: 4.9,
  };

  const upcomingTours = [
    {
      id: '1',
      title: 'Historical City Walking Tour',
      date: '2026-03-25',
      time: '10:00 AM',
      participants: 12,
      location: 'Downtown',
    },
    {
      id: '2',
      title: 'Mountain Hiking Adventure',
      date: '2026-03-26',
      time: '08:00 AM',
      participants: 8,
      location: 'North Peak',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {currentUser?.name}!</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here&apos;s your guide overview for today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.upcomingTours}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Tours</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.totalBookings}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Bookings</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">${stats.monthEarnings.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.rating.toFixed(1)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tours */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Upcoming Tours</h2>
            <Link href="/guide/schedule">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingTours.map((tour) => (
              <div key={tour.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">{tour.title}</h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {tour.date} at {tour.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {tour.participants} participants
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tour.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <p className="font-medium">New Booking Received</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Historical City Tour - 4 participants
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-medium">5-Star Review</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  &quot;Amazing guide! Very knowledgeable&quot;
                </p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
              <div>
                <p className="font-medium">Tour Completed</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Beach Sunset Tour - $340.00 earned
                </p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
