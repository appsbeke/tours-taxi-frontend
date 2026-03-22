# Tours & Taxi - Frontend

A modern, full-stack booking platform for rides and tours built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Multi-Portal Architecture
- **Customer Portal** - Book rides and tours, manage bookings
- **Driver Portal** - Accept rides, track earnings, manage schedule
- **Guide Portal** - Manage tours, bookings, and earnings
- **Admin Dashboard** - System management, analytics, and configuration

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn/ui
- **State Management:** Zustand + React Query
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Real-time:** Socket.io (ready)

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/appsbeke/tours-taxi-frontend.git
cd tours-taxi-frontend

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000`

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://tours-taxi-backend.onrender.com
NEXT_PUBLIC_SOCKET_URL=https://tours-taxi-backend.onrender.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_key_here
```

## 📱 Portals Overview

### Customer Portal (`/customer`)
- Dashboard with quick actions
- Ride booking with fare estimation
- Tour browsing and booking
- Booking management

### Driver Portal (`/driver`)
- Dashboard with earnings stats
- Ride request management
- Active ride tracking
- Earnings history
- Schedule management
- Vehicle profile

### Guide Portal (`/guide`)
- Dashboard with tour overview
- Tour management
- Schedule calendar
- Booking management
- Earnings tracking
- Professional profile

### Admin Dashboard (`/admin`)
- System overview with charts
- User management
- Booking management
- Vehicle fleet management
- Tour catalog management
- Pricing configuration
- Analytics & reports
- System settings

## 🎨 UI Components

Built with Shadcn/ui:
- Button
- Card
- Input
- Label
- Select
- Tabs
- Dialog
- Avatar
- Dropdown Menu

## 📊 Analytics

Admin dashboard includes:
- Revenue trend charts (Line)
- User growth analysis (Bar)
- Role distribution (Pie)
- Real-time activity feed
- System statistics

## 🔐 Authentication

- JWT-based authentication
- Role-based access control
- Protected routes
- Auto-redirect by role

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or deploy via Vercel dashboard:
1. Import GitHub repository
2. Configure environment variables
3. Deploy

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🗂️ Project Structure

```
tours-taxi-frontend/
├── app/
│   ├── admin/          # Admin dashboard pages
│   ├── customer/       # Customer portal pages
│   ├── driver/         # Driver portal pages
│   ├── guide/          # Guide portal pages
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   └── page.tsx        # Landing page
├── components/
│   ├── ui/             # Shadcn components
│   └── protected-route.tsx
├── hooks/              # Custom React hooks
├── store/              # Zustand stores
├── types/              # TypeScript definitions
└── lib/                # Utilities
```

## 🔗 API Integration

Backend API: `https://tours-taxi-backend.onrender.com`

### Endpoints Used
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Current user
- `GET /api/rides` - List rides
- `POST /api/rides` - Create ride
- `GET /api/tours` - List tours
- `POST /api/tour-bookings` - Book tour

## 🧪 Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## 📄 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues

Report issues at: https://github.com/appsbeke/tours-taxi-frontend/issues

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using Next.js**
