'use client';

import { Card } from '@/components/ui/card';
import { Users, Car, Map, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const stats = {
    totalUsers: 1234,
    activeRides: 45,
    activeTours: 28,
    todayRevenue: 12450.00,
  };

  const revenueData = [
    { name: 'Mon', rides: 2400, tours: 1800 },
    { name: 'Tue', rides: 1398, tours: 2100 },
    { name: 'Wed', rides: 3800, tours: 2400 },
    { name: 'Thu', rides: 3908, tours: 2780 },
    { name: 'Fri', rides: 4800, tours: 3200 },
    { name: 'Sat', rides: 3800, tours: 4100 },
    { name: 'Sun', rides: 4300, tours: 3900 },
  ];

  const userGrowthData = [
    { month: 'Jan', customers: 400, drivers: 120, guides: 80 },
    { month: 'Feb', customers: 500, drivers: 140, guides: 95 },
    { month: 'Mar', customers: 650, drivers: 165, guides: 110 },
  ];

  const recentActivity = [
    { id: '1', type: 'ride', user: 'John Doe', action: 'Completed ride', time: '5 min ago' },
    { id: '2', type: 'tour', user: 'Jane Smith', action: 'Booked Historical Tour', time: '12 min ago' },
    { id: '3', type: 'user', user: 'Mike Wilson', action: 'New driver registered', time: '25 min ago' },
    { id: '4', type: 'ride', user: 'Sarah Johnson', action: 'Started ride to Airport', time: '32 min ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">System overview and analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.totalUsers.toLocaleString()}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Car className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <Activity className="h-5 w-5 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.activeRides}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Rides</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Map className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.activeTours}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Tours</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">${stats.todayRevenue.toLocaleString()}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Today&apos;s Revenue</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Weekly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rides" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="tours" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="customers" fill="#8884d8" />
              <Bar dataKey="drivers" fill="#82ca9d" />
              <Bar dataKey="guides" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'ride' ? 'bg-blue-500' :
                  activity.type === 'tour' ? 'bg-green-500' : 'bg-purple-500'
                }`}></div>
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
