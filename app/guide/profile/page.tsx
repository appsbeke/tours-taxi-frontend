'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { User, Languages, Award } from 'lucide-react';
import { useState } from 'react';

export default function GuideProfile() {
  const { } = useAuth();
  const [profile, setProfile] = useState({
    bio: 'Passionate tour guide with 5+ years of experience showing visitors the best of our city.',
    languages: ['English', 'Spanish', 'French'],
    certifications: ['Licensed Tour Guide', 'First Aid Certified', 'CPR Certified'],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Guide Profile</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your professional information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bio */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold">About Me</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full mt-1.5 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 min-h-[120px]"
              />
            </div>

            <Button className="w-full">Update Bio</Button>
          </div>
        </Card>

        {/* Languages */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Languages className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl font-bold">Languages</h2>
          </div>

          <div className="space-y-3 mb-4">
            {profile.languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span>{lang}</span>
                <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full">Add Language</Button>
        </Card>

        {/* Certifications */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl font-bold">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>{cert}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full">Add Certification</Button>
        </Card>
      </div>
    </div>
  );
}
