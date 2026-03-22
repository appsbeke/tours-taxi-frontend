'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRides } from '@/hooks/use-rides';
import { useTours } from '@/hooks/use-tours';
import Link from 'next/link';
import { MapPin, Calendar, DollarSign, User, X } from 'lucide-react';
import { format } from 'date-fns';

export default function BookingsPage() {
  const { rides, isLoading: ridesLoading, cancelRide } = useRides();
  const { myBookings, isLoading: toursLoading } = useTours();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <Tabs defaultValue="rides" className="space-y-6">
        <TabsList>
          <TabsTrigger value="rides">Ride Bookings</TabsTrigger>
          <TabsTrigger value="tours">Tour Bookings</TabsTrigger>
        </TabsList>

        {/* Rides Tab */}
        <TabsContent value="rides">
          {ridesLoading ? (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">Loading rides...</p>
            </Card>
          ) : rides && rides.length > 0 ? (
            <div className="space-y-4">
              {rides.map((ride) => (
                <Card key={ride.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      {/* Status Badge */}
                      <div className="mb-3">
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          ride.status === 'completed' ? 'bg-green-100 text-green-700' :
                          ride.status === 'ongoing' ? 'bg-blue-100 text-blue-700' :
                          ride.status === 'accepted' ? 'bg-purple-100 text-purple-700' :
                          ride.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                        </span>
                      </div>

                      {/* Locations */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Pickup</p>
                            <p className="text-sm text-muted-foreground">{ride.pickupLocation.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Dropoff</p>
                            <p className="text-sm text-muted-foreground">{ride.dropoffLocation.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">${ride.fare}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {format(new Date(ride.createdAt), 'MMM dd, yyyy HH:mm')}
                        </div>
                        {ride.driver && (
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {ride.driver.name}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      {['pending', 'accepted', 'ongoing'].includes(ride.status) && (
                        <>
                          <Link href={`/customer/rides/${ride.id}`}>
                            <Button className="w-full">Track Ride</Button>
                          </Link>
                          {ride.status === 'pending' && (
                            <Button
                              variant="outline"
                              className="w-full text-red-500 hover:text-red-600"
                              onClick={() => cancelRide(ride.id)}
                            >
                              <X className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          )}
                        </>
                      )}
                      {ride.status === 'completed' && (
                        <Link href={`/customer/rides/${ride.id}/review`}>
                          <Button variant="outline" className="w-full">Leave Review</Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-30" />
                <h3 className="text-xl font-semibold mb-2">No ride bookings</h3>
                <p className="text-muted-foreground mb-4">You haven&apos;t booked any rides yet</p>
                <Link href="/customer/book-ride">
                  <Button>Book Your First Ride</Button>
                </Link>
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Tours Tab */}
        <TabsContent value="tours">
          {toursLoading ? (
            <Card className="p-6">
              <p className="text-center text-muted-foreground">Loading tour bookings...</p>
            </Card>
          ) : myBookings && myBookings.length > 0 ? (
            <div className="space-y-4">
              {myBookings.map((booking) => (
                <Card key={booking.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      {/* Tour Title */}
                      <h3 className="text-xl font-semibold mb-2">{booking.tour?.title}</h3>

                      {/* Status Badge */}
                      <div className="mb-3">
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          booking.status === 'completed' ? 'bg-green-100 text-green-700' :
                          booking.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                          booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {format(new Date(booking.date), 'MMM dd, yyyy')}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {booking.participants} participant{booking.participants > 1 ? 's' : ''}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">${booking.totalAmount}</span>
                        </div>
                      </div>

                      {/* Payment Status */}
                      <div className="mt-2">
                        <span className={`text-sm ${
                          booking.paymentStatus === 'paid' ? 'text-green-600' :
                          booking.paymentStatus === 'refunded' ? 'text-blue-600' :
                          'text-yellow-600'
                        }`}>
                          Payment: {booking.paymentStatus}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <Link href={`/customer/tours/${booking.tourId}`}>
                        <Button variant="outline" className="w-full">View Tour</Button>
                      </Link>
                      {booking.status === 'completed' && (
                        <Link href={`/customer/tours/${booking.tourId}/review`}>
                          <Button className="w-full">Leave Review</Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12">
              <div className="text-center">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-30" />
                <h3 className="text-xl font-semibold mb-2">No tour bookings</h3>
                <p className="text-muted-foreground mb-4">You haven&apos;t booked any tours yet</p>
                <Link href="/customer/tours">
                  <Button>Explore Tours</Button>
                </Link>
              </div>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
