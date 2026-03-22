'use client';

import { ProtectedRoute } from '@/components/protected-route';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Map, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ProtectedRoute allowedRoles={['guide']}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/guide/dashboard" className="flex items-center space-x-2">
                <Map className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Tours & Taxi - Guide</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/guide/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
                <Link href="/guide/tours" className="hover:text-primary transition">
                  My Tours
                </Link>
                <Link href="/guide/schedule" className="hover:text-primary transition">
                  Schedule
                </Link>
                <Link href="/guide/bookings" className="hover:text-primary transition">
                  Bookings
                </Link>
                <Link href="/guide/earnings" className="hover:text-primary transition">
                  Earnings
                </Link>
                <Link href="/guide/profile" className="hover:text-primary transition">
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
                  href="/guide/dashboard"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/guide/tours"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Tours
                </Link>
                <Link
                  href="/guide/schedule"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule
                </Link>
                <Link
                  href="/guide/bookings"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bookings
                </Link>
                <Link
                  href="/guide/earnings"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Earnings
                </Link>
                <Link
                  href="/guide/profile"
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
