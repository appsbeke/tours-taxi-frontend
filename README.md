# Tours & Taxi Frontend

A modern, production-ready Next.js 14 booking platform for ride-hailing and tour services.

## 🚀 Features

- **Multi-Portal Architecture**
  - Customer Portal: Book rides/tours, track bookings, leave reviews
  - Driver Portal: Accept rides, navigate, view earnings (coming soon)
  - Guide Portal: Manage tours and schedules (coming soon)
  - Admin Dashboard: Full system management (coming soon)

- **Core Functionality**
  - 🔐 Authentication (Login/Register with JWT)
  - 🚗 Ride Booking with fare estimation
  - 🗺️ Tour browsing and booking
  - 📊 Real-time booking tracking
  - 💳 Payment flow integration (Stripe-ready)
  - ⭐ Reviews and ratings system
  - 📱 Fully responsive, mobile-first design

- **Technical Stack**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS + Shadcn/ui components
  - React Query for data fetching
  - Zustand for state management
  - React Hook Form + Zod for forms
  - Framer Motion for animations
  - Socket.io client for real-time features

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tours-taxi-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_API_URL=https://tours-taxi-backend.onrender.com
NEXT_PUBLIC_SOCKET_URL=https://tours-taxi-backend.onrender.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
tours-taxi-frontend/
├── app/                      # Next.js App Router pages
│   ├── customer/            # Customer portal pages
│   ├── driver/              # Driver portal pages (coming soon)
│   ├── guide/               # Guide portal pages (coming soon)
│   ├── admin/               # Admin dashboard (coming soon)
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   └── page.tsx             # Landing page
├── components/              # Reusable components
│   ├── ui/                  # Shadcn/ui components
│   └── protected-route.tsx  # Route protection wrapper
├── hooks/                   # Custom React hooks
│   ├── use-auth.ts         # Authentication hook
│   ├── use-rides.ts        # Rides management hook
│   └── use-tours.ts        # Tours management hook
├── store/                   # Zustand state stores
│   ├── auth-store.ts       # Authentication state
│   └── booking-store.ts    # Booking state
├── types/                   # TypeScript type definitions
│   └── index.ts            # Shared types
└── lib/                     # Utility functions
    └── api-client.ts       # Axios API client
```

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with smooth animations
- **Dark Mode**: Full dark mode support
- **Accessibility**: ARIA-compliant components
- **Performance**: Optimized images, lazy loading, and code splitting
- **Responsive**: Mobile-first design that works on all devices

## 🔌 API Integration

The frontend connects to the Tours & Taxi backend API:
- **Backend URL**: https://tours-taxi-backend.onrender.com
- **API Docs**: https://tours-taxi-backend.onrender.com/api/docs

All API calls are handled through:
- `lib/api-client.ts` - Axios client with auth interceptors
- Custom hooks in `hooks/` directory
- React Query for caching and state management

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SOCKET_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 User Roles

- **Customer**: Book rides and tours, track bookings, leave reviews
- **Driver**: Accept rides, navigate, view earnings
- **Guide**: Manage tours, schedules, and bookings
- **Admin**: Full system access and management

## 🛠️ Tech Highlights

- **Type Safety**: Full TypeScript coverage
- **Form Validation**: Zod schemas with React Hook Form
- **State Management**: Zustand for global state, React Query for server state
- **Authentication**: JWT-based with secure token storage
- **Real-time**: Socket.io for live updates (ride tracking, etc.)
- **UI Components**: Shadcn/ui for consistent, accessible components

## 📄 License

This project is part of the Tours & Taxi platform.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📧 Support

For support, email support@tourstax i.com or open an issue in the repository.

---

Built with ❤️ using Next.js 14 and TypeScript
