'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth-store';
import { useRides } from '@/hooks/use-rides';
import { useTours } from '@/hooks/use-tours';
import Link from 'next/link';
import { Car, MapPin, Calendar, Star, ArrowRight } from 'lucide-react';

export default function CustomerDashboard() {
  const { user } = useAuthStore();
  const { rides, isLoading: ridesLoading } = useRides();
  const { myBookings, isLoading: toursLoading } = useTours();

  const activeRides = rides?.filter(r => ['pending', 'accepted', 'ongoing'].includes(r.status)) || [];
  const upcomingTourBookings = myBookings?.filter(b => b.status !== 'completed' && b.status !== 'cancelled') || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground">Manage your rides and tour bookings</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Book a Ride</h3>
              <p className="text-muted-foreground mb-4">Quick and convenient transportation</p>
              <Link href="/customer/book-ride">
                <Button>
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Car className="h-16 w-16 text-primary opacity-20" />
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Explore Tours</h3>
              <p className="text-muted-foreground mb-4">Discover amazing experiences</p>
              <Link href="/customer/tours">
                <Button variant="outline">
                  Browse Tours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <MapPin className="h-16 w-16 text-primary opacity-20" />
          </div>
        </Card>
      </div>

      {/* Active Rides */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Active Rides</h2>
          <Link href="/customer/bookings?tab=rides">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </div>
        {ridesLoading ? (
          <Card className="p-6">
            <p className="text-center text-muted-foreground">Loading...</p>
          </Card>
        ) : activeRides.length > 0 ? (
          <div className="grid gap-4">
            {activeRides.slice(0, 3).map((ride) => (
              <Card key={ride.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        ride.status === 'ongoing' ? 'bg-green-100 text-green-700' :
                        ride.status === 'accepted' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {ride.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {ride.pickupLocation.address} → {ride.dropoffLocation.address}
                    </p>
                    <p className="text-sm font-medium mt-1">${ride.fare}</p>
                  </div>
                  <Link href={`/customer/rides/${ride.id}`}>
                    <Button size="sm">Track</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6">
            <p className="text-center text-muted-foreground">No active rides</p>
          </Card>
        )}
      </div>

      {/* Upcoming Tours */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Upcoming Tours</h2>
          <Link href="/customer/bookings?tab=tours">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </div>
        {toursLoading ? (
          <Card className="p-6">
            <p className="text-center text-muted-foreground">Loading...</p>
          </Card>
        ) : upcomingTourBookings.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingTourBookings.slice(0, 4).map((booking) => (
              <Card key={booking.id} className="p-4">
                <h3 className="font-semibold mb-2">{booking.tour?.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(booking.date).toLocaleDateString()}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">${booking.totalAmount}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6">
            <p className="text-center text-muted-foreground">No upcoming tours</p>
          </Card>
        )}
      </div>
    </div>
  );
}
