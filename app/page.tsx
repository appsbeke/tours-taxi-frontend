'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Car, MapPin, Users, Star, Clock, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Tours & Taxi</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#rides" className="hover:text-primary transition">Rides</Link>
            <Link href="#tours" className="hover:text-primary transition">Tours</Link>
            <Link href="#about" className="hover:text-primary transition">About</Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Your Journey, Our Priority
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Book premium rides or explore amazing tours with professional drivers and expert guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register?role=customer">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Ride
                </Button>
              </Link>
              <Link href="/register?role=customer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Tours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Track your ride in real-time with GPS integration and live updates.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">
                Verified drivers and guides, secure payments, and 24/7 support.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
              <p className="text-muted-foreground">
                Highly rated drivers and guides with excellent customer reviews.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Taxi Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Quick pickups</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Point-to-point travel</li>
                <li className="flex items-center"><Star className="h-4 w-4 mr-2" /> Premium vehicles</li>
              </ul>
              <Link href="/register?role=customer">
                <Button className="mt-6 w-full">Book Now</Button>
              </Link>
            </Card>
            <Card className="p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Guided Tours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Users className="h-4 w-4 mr-2" /> Expert guides</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Popular destinations</li>
                <li className="flex items-center"><Star className="h-4 w-4 mr-2" /> Memorable experiences</li>
              </ul>
              <Link href="/register?role=customer">
                <Button className="mt-6 w-full">Explore Tours</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA for Drivers/Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Become a driver or guide and start earning on your own schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?role=driver">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Become a Driver
              </Button>
            </Link>
            <Link href="/register?role=guide">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Become a Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Tours & Taxi</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 Tours & Taxi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
