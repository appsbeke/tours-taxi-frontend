'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DollarSign } from 'lucide-react';

export default function AdminPricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pricing Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure ride pricing and surge rates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Base Rates */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Base Rates (per km)</h2>
          <div className="space-y-4">
            {['Sedan', 'SUV', 'Van', 'Luxury'].map((type) => (
              <div key={type}>
                <Label htmlFor={type.toLowerCase()}>{type}</Label>
                <div className="flex items-center mt-1.5">
                  <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                  <Input
                    id={type.toLowerCase()}
                    type="number"
                    step="0.01"
                    defaultValue={type === 'Sedan' ? '1.50' : type === 'SUV' ? '2.00' : type === 'Van' ? '2.50' : '3.50'}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-6">Save Base Rates</Button>
        </Card>

        {/* Surge Pricing */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Surge Pricing</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="peak-hours">Peak Hours Multiplier</Label>
              <Input
                id="peak-hours"
                type="number"
                step="0.1"
                defaultValue="1.5"
                className="mt-1.5"
              />
              <p className="text-xs text-gray-500 mt-1">Applied during rush hours (7-9 AM, 5-7 PM)</p>
            </div>

            <div>
              <Label htmlFor="weekend">Weekend Multiplier</Label>
              <Input
                id="weekend"
                type="number"
                step="0.1"
                defaultValue="1.3"
                className="mt-1.5"
              />
              <p className="text-xs text-gray-500 mt-1">Applied on Saturdays and Sundays</p>
            </div>

            <div>
              <Label htmlFor="high-demand">High Demand Multiplier</Label>
              <Input
                id="high-demand"
                type="number"
                step="0.1"
                defaultValue="2.0"
                className="mt-1.5"
              />
              <p className="text-xs text-gray-500 mt-1">Applied when demand exceeds supply</p>
            </div>
          </div>
          <Button className="w-full mt-6">Save Surge Settings</Button>
        </Card>

        {/* Minimum Fare */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Minimum Fare</h2>
          <div>
            <Label htmlFor="min-fare">Minimum Charge</Label>
            <div className="flex items-center mt-1.5">
              <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
              <Input
                id="min-fare"
                type="number"
                step="0.01"
                defaultValue="5.00"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Minimum charge for any ride</p>
          </div>
          <Button className="w-full mt-6">Save Minimum Fare</Button>
        </Card>

        {/* Cancellation Fee */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Cancellation Policy</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cancel-fee">Cancellation Fee</Label>
              <div className="flex items-center mt-1.5">
                <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="cancel-fee"
                  type="number"
                  step="0.01"
                  defaultValue="3.00"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cancel-time">Free Cancellation Window (minutes)</Label>
              <Input
                id="cancel-time"
                type="number"
                defaultValue="5"
                className="mt-1.5"
              />
              <p className="text-xs text-gray-500 mt-1">Time allowed for free cancellation after booking</p>
            </div>
          </div>
          <Button className="w-full mt-6">Save Cancellation Policy</Button>
        </Card>
      </div>
    </div>
  );
}
