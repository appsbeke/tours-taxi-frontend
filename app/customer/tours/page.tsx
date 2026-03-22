'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTours } from '@/hooks/use-tours';
import Link from 'next/link';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import Image from 'next/image';

export default function ToursPage() {
  const { tours, isLoading } = useTours();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-4 animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore Tours</h1>
        <p className="text-muted-foreground">Discover amazing experiences with expert guides</p>
      </div>

      {tours && tours.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition group">
              {/* Tour Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                {tour.images && tour.images.length > 0 ? (
                  <Image
                    src={tour.images[0]}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary opacity-30" />
                  </div>
                )}
                
                {/* Status Badge */}
                {tour.status === 'active' && (
                  <Badge className="absolute top-3 right-3 bg-green-500">
                    Available
                  </Badge>
                )}
              </div>

              {/* Tour Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{tour.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {tour.duration} hours
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Up to {tour.maxParticipants} people
                  </div>
                </div>

                {/* Rating */}
                {tour.rating > 0 && (
                  <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{tour.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      ({tour.reviewCount} reviews)
                    </span>
                  </div>
                )}

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-primary">${tour.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">/ person</span>
                  </div>
                  <Link href={`/customer/tours/${tour.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12">
          <div className="text-center">
            <MapPin className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-30" />
            <h3 className="text-xl font-semibold mb-2">No tours available</h3>
            <p className="text-muted-foreground">Check back later for exciting tours</p>
          </div>
        </Card>
      )}
    </div>
  );
}
