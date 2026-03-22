'use client';

import { ProtectedRoute } from '@/components/protected-route';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Car, MapPin, Calendar, User, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ProtectedRoute allowedRoles={['customer']}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/customer/dashboard" className="flex items-center space-x-2">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Tours & Taxi</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/customer/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
                <Link href="/customer/book-ride" className="hover:text-primary transition">
                  Book Ride
                </Link>
                <Link href="/customer/tours" className="hover:text-primary transition">
                  Tours
                </Link>
                <Link href="/customer/bookings" className="hover:text-primary transition">
                  My Bookings
                </Link>
                <Link href="/customer/profile" className="hover:text-primary transition">
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
                  href="/customer/dashboard"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/customer/book-ride"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Ride
                </Link>
                <Link
                  href="/customer/tours"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tours
                </Link>
                <Link
                  href="/customer/bookings"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <Link
                  href="/customer/profile"
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
