'use client';

import { ProtectedRoute } from '@/components/protected-route';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { Shield, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/admin/dashboard" className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Tours & Taxi - Admin</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                <Link href="/admin/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
                <Link href="/admin/users" className="hover:text-primary transition">
                  Users
                </Link>
                <Link href="/admin/bookings" className="hover:text-primary transition">
                  Bookings
                </Link>
                <Link href="/admin/vehicles" className="hover:text-primary transition">
                  Vehicles
                </Link>
                <Link href="/admin/tours" className="hover:text-primary transition">
                  Tours
                </Link>
                <Link href="/admin/pricing" className="hover:text-primary transition">
                  Pricing
                </Link>
                <Link href="/admin/reports" className="hover:text-primary transition">
                  Reports
                </Link>
                <Link href="/admin/settings" className="hover:text-primary transition">
                  Settings
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
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="lg:hidden mt-4 pb-4 space-y-2">
                <Link
                  href="/admin/dashboard"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/users"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Users
                </Link>
                <Link
                  href="/admin/bookings"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bookings
                </Link>
                <Link
                  href="/admin/vehicles"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vehicles
                </Link>
                <Link
                  href="/admin/tours"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tours
                </Link>
                <Link
                  href="/admin/pricing"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/admin/reports"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reports
                </Link>
                <Link
                  href="/admin/settings"
                  className="block py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
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
