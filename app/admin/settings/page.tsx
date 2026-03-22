'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Mail, Bell, Shield } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">System Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure application settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold">General Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="app-name">Application Name</Label>
              <Input id="app-name" defaultValue="Tours & Taxi" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="support-email">Support Email</Label>
              <Input id="support-email" type="email" defaultValue="support@toursandtaxi.com" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="support-phone">Support Phone</Label>
              <Input id="support-phone" type="tel" defaultValue="+1 234 567 8900" className="mt-1.5" />
            </div>
          </div>

          <Button className="w-full mt-6">Save General Settings</Button>
        </Card>

        {/* Email Settings */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl font-bold">Email Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="smtp-host">SMTP Host</Label>
              <Input id="smtp-host" defaultValue="smtp.example.com" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="smtp-port">SMTP Port</Label>
              <Input id="smtp-port" type="number" defaultValue="587" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="from-email">From Email</Label>
              <Input id="from-email" type="email" defaultValue="noreply@toursandtaxi.com" className="mt-1.5" />
            </div>
          </div>

          <Button className="w-full mt-6">Save Email Settings</Button>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Bell className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl font-bold">Notification Settings</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <input type="checkbox" id="email-notifications" defaultChecked className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <input type="checkbox" id="sms-notifications" defaultChecked className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <input type="checkbox" id="push-notifications" className="w-4 h-4" />
            </div>
          </div>

          <Button className="w-full mt-6">Save Notification Settings</Button>
        </Card>

        {/* Security Settings */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-xl font-bold">Security Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input id="session-timeout" type="number" defaultValue="30" className="mt-1.5" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="2fa">Two-Factor Authentication</Label>
              <input type="checkbox" id="2fa" className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="password-reset">Allow Password Reset</Label>
              <input type="checkbox" id="password-reset" defaultChecked className="w-4 h-4" />
            </div>
          </div>

          <Button className="w-full mt-6">Save Security Settings</Button>
        </Card>
      </div>
    </div>
  );
}
