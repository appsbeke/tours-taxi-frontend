'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { Car, FileText } from 'lucide-react';
import { useState } from 'react';

export default function DriverProfile() {
  const { } = useAuth();
  const [vehicle, setVehicle] = useState({
    type: 'sedan',
    make: 'Toyota',
    model: 'Camry',
    year: '2022',
    plateNumber: 'ABC-123',
    color: 'Silver',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Driver Profile</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your vehicle and documents</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vehicle Information */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Car className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold">Vehicle Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="type">Vehicle Type</Label>
              <select
                id="type"
                value={vehicle.type}
                onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
                className="w-full mt-1.5 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="van">Van</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            <div>
              <Label htmlFor="make">Make</Label>
              <Input
                id="make"
                value={vehicle.make}
                onChange={(e) => setVehicle({ ...vehicle, make: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                value={vehicle.model}
                onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={vehicle.year}
                  onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="color">Color</Label>
                <Input
                  id="color"
                  value={vehicle.color}
                  onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="plate">License Plate</Label>
              <Input
                id="plate"
                value={vehicle.plateNumber}
                onChange={(e) => setVehicle({ ...vehicle, plateNumber: e.target.value })}
              />
            </div>

            <Button className="w-full">Save Vehicle Info</Button>
          </div>
        </Card>

        {/* Documents */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl font-bold">Documents</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Driver&apos;s License</p>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expires: 2028-12-31</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Vehicle Registration</p>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expires: 2027-06-30</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Insurance Certificate</p>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expires: 2027-03-15</p>
            </div>

            <Button variant="outline" className="w-full">Upload New Document</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
