'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, Users, DollarSign, Car } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function AdminReports() {
  const monthlyRevenue = [
    { month: 'Jan', revenue: 12400 },
    { month: 'Feb', revenue: 15200 },
    { month: 'Mar', revenue: 18900 },
  ];

  const usersByRole = [
    { name: 'Customers', value: 850 },
    { name: 'Drivers', value: 165 },
    { name: 'Guides', value: 110 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Business insights and performance metrics</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="h-8 w-8 text-green-600" />
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold">$46,500</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Car className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold">2,345</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Rides</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold">1,125</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold">4.8</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Monthly Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Users by Role</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={usersByRole}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {usersByRole.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
