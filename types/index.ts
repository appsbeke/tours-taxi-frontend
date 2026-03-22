export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'driver' | 'guide' | 'admin';
  phone?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
  role: 'customer' | 'driver' | 'guide';
}

export interface Ride {
  id: string;
  customerId: string;
  driverId?: string;
  pickupLocation: Location;
  dropoffLocation: Location;
  status: 'pending' | 'accepted' | 'ongoing' | 'completed' | 'cancelled';
  fare: number;
  distance: number;
  duration: number;
  vehicleType: string;
  scheduledTime?: string;
  createdAt: string;
  updatedAt: string;
  customer?: User;
  driver?: User;
}

export interface Tour {
  id: string;
  guideId: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  duration: number;
  maxParticipants: number;
  location: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  status: 'active' | 'inactive';
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
  guide?: User;
}

export interface TourBooking {
  id: string;
  tourId: string;
  customerId: string;
  participants: number;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: string;
  updatedAt: string;
  tour?: Tour;
  customer?: User;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Review {
  id: string;
  userId: string;
  targetId: string;
  targetType: 'ride' | 'tour' | 'driver' | 'guide';
  rating: number;
  comment: string;
  createdAt: string;
  user?: User;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  type: 'ride' | 'tour';
  referenceId: string;
  paymentMethod: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: string;
  sender?: User;
  receiver?: User;
}

export interface Vehicle {
  id: string;
  driverId: string;
  type: string;
  make: string;
  model: string;
  year: number;
  plateNumber: string;
  color: string;
  capacity: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
