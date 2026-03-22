'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Plus } from 'lucide-react';

export default function AdminVehicles() {
  const vehicles = [
    { id: '1', driver: 'Jane Smith', type: 'Sedan', make: 'Toyota', model: 'Camry', year: 2022, plate: 'ABC-123', status: 'active' },
    { id: '2', driver: 'Bob Johnson', type: 'SUV', make: 'Honda', model: 'CR-V', year: 2021, plate: 'XYZ-789', status: 'active' },
    { id: '3', driver: 'Mike Brown', type: 'Van', make: 'Ford', model: 'Transit', year: 2023, plate: 'DEF-456', status: 'inactive' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Vehicle Fleet</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage registered vehicles</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Car className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                vehicle.status === 'active'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}>
                {vehicle.status}
              </span>
            </div>

            <h3 className="font-bold text-lg mb-1">{vehicle.make} {vehicle.model}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Driver: {vehicle.driver}</p>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Type:</span>
                <span className="font-medium">{vehicle.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Year:</span>
                <span className="font-medium">{vehicle.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plate:</span>
                <span className="font-medium">{vehicle.plate}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
              <Button variant="outline" size="sm" className="flex-1">View</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
