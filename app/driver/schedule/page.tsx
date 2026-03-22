'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { useState } from 'react';

export default function Schedule() {
  const [availability, setAvailability] = useState({
    monday: { enabled: true, start: '08:00', end: '18:00' },
    tuesday: { enabled: true, start: '08:00', end: '18:00' },
    wednesday: { enabled: true, start: '08:00', end: '18:00' },
    thursday: { enabled: true, start: '08:00', end: '18:00' },
    friday: { enabled: true, start: '08:00', end: '18:00' },
    saturday: { enabled: false, start: '10:00', end: '16:00' },
    sunday: { enabled: false, start: '10:00', end: '16:00' },
  });

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Schedule & Availability</h1>
        <p className="text-gray-600 dark:text-gray-400">Set your working hours</p>
      </div>

      <Card className="p-6 max-w-3xl">
        <div className="space-y-6">
          {days.map((day) => (
            <div key={day} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3 md:w-40">
                <input
                  type="checkbox"
                  checked={availability[day as keyof typeof availability].enabled}
                  onChange={(e) => {
                    setAvailability(prev => ({
                      ...prev,
                      [day]: { ...prev[day as keyof typeof availability], enabled: e.target.checked }
                    }));
                  }}
                  className="w-4 h-4"
                />
                <label className="font-medium capitalize">{day}</label>
              </div>

              {availability[day as keyof typeof availability].enabled && (
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <input
                      type="time"
                      value={availability[day as keyof typeof availability].start}
                      onChange={(e) => {
                        setAvailability(prev => ({
                          ...prev,
                          [day]: { ...prev[day as keyof typeof availability], start: e.target.value }
                        }));
                      }}
                      className="px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <span className="text-gray-500">to</span>
                  <input
                    type="time"
                    value={availability[day as keyof typeof availability].end}
                    onChange={(e) => {
                      setAvailability(prev => ({
                        ...prev,
                        [day]: { ...prev[day as keyof typeof availability], end: e.target.value }
                      }));
                    }}
                    className="px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Button className="flex-1">Save Schedule</Button>
          <Button variant="outline">Reset</Button>
        </div>
      </Card>
    </div>
  );
}
