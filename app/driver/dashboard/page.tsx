'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { DollarSign, Star, Car, Clock, TrendingUp, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DriverDashboard() {
  const { currentUser } = useAuth();
  const [isOnline, setIsOnline] = useState(false);
  const [stats, setStats] = useState({
    todayEarnings: 0,
    weekEarnings: 0,
    totalRides: 0,
    rating: 0,
    activeRides: 0,
  });

  // Mock data for demonstration
  useEffect(() => {
    setStats({
      todayEarnings: 125.50,
      weekEarnings: 847.25,
      totalRides: 234,
      rating: 4.8,
      activeRides: 1,
    });
  }, []);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {currentUser?.name}!</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here&apos;s your driver overview for today
        </p>
      </div>

      {/* Online Status Toggle */}
      <Card className="p-6 mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Driver Status</h2>
            <p className="text-blue-100">
              {isOnline ? 'You are currently online and accepting rides' : 'You are offline'}
            </p>
          </div>
          <Button
            onClick={toggleOnlineStatus}
            size="lg"
            variant={isOnline ? 'secondary' : 'default'}
            className={isOnline ? 'bg-green-500 hover:bg-green-600' : 'bg-white text-blue-600 hover:bg-gray-100'}
          >
            {isOnline ? 'Go Offline' : 'Go Online'}
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">${stats.todayEarnings.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Today&apos;s Earnings</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">${stats.weekEarnings.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">This Week</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Car className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.totalRides}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Rides</p>
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

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/driver/ride-requests">
              <Button className="w-full justify-start" variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                View Ride Requests
              </Button>
            </Link>
            <Link href="/driver/active-ride">
              <Button className="w-full justify-start" variant="outline">
                <Car className="h-4 w-4 mr-2" />
                Active Ride
              </Button>
            </Link>
            <Link href="/driver/earnings">
              <Button className="w-full justify-start" variant="outline">
                <DollarSign className="h-4 w-4 mr-2" />
                View Earnings
              </Button>
            </Link>
            <Link href="/driver/schedule">
              <Button className="w-full justify-start" variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                Manage Schedule
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <p className="font-medium">Ride Completed</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Downtown to Airport - $45.00
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-medium">5-Star Rating Received</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  &quot;Great driver, very professional!&quot;
                </p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
              <div>
                <p className="font-medium">Payout Processed</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Weekly earnings: $847.25
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
