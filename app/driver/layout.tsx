'use client';

import { ProtectedRoute } from '@/components/protected-route';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Car, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ProtectedRoute allowedRoles={['driver']}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/driver/dashboard" className="flex items-center space-x-2">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Tours & Taxi - Driver</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/driver/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
                <Link href="/driver/ride-requests" className="hover:text-primary transition">
                  Ride Requests
                </Link>
                <Link href="/driver/active-ride" className="hover:text-primary transition">
                  Active Ride
                </Link>
                <Link href="/driver/earnings" className="hover:text-primary transition">
                  Earnings
                </Link>
                <Link href="/driver/schedule" className="hover:text-primary transition">
                  Schedule
                </Link>
                <Link href="/driver/profile" className="hover:text-primary transition">
                  Profile
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 space-y-2">
                <Link
                  href="/driver/dashboard"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/driver/ride-requests"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ride Requests
                </Link>
                <Link
                  href="/driver/active-ride"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Active Ride
                </Link>
                <Link
                  href="/driver/earnings"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Earnings
                </Link>
                <Link
                  href="/driver/schedule"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule
                </Link>
                <Link
                  href="/driver/profile"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="block py-2 text-red-500 hover:text-red-600"
                >
                  Logout
                </button>
              </nav>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </ProtectedRoute>
  );
}
