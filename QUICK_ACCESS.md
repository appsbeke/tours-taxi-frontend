# Quick Access Guide

## 🚀 Portal Routes

### Customer Portal
- Dashboard: `http://localhost:3000/customer/dashboard`
- Book Ride: `http://localhost:3000/customer/book-ride`
- Tours: `http://localhost:3000/customer/tours`
- Bookings: `http://localhost:3000/customer/bookings`

### Driver Portal
- Dashboard: `http://localhost:3000/driver/dashboard`
- Ride Requests: `http://localhost:3000/driver/ride-requests`
- Active Ride: `http://localhost:3000/driver/active-ride`
- Earnings: `http://localhost:3000/driver/earnings`
- Schedule: `http://localhost:3000/driver/schedule`
- Profile: `http://localhost:3000/driver/profile`

### Guide Portal
- Dashboard: `http://localhost:3000/guide/dashboard`
- Tours: `http://localhost:3000/guide/tours`
- Schedule: `http://localhost:3000/guide/schedule`
- Bookings: `http://localhost:3000/guide/bookings`
- Earnings: `http://localhost:3000/guide/earnings`
- Profile: `http://localhost:3000/guide/profile`

### Admin Dashboard
- Dashboard: `http://localhost:3000/admin/dashboard`
- Users: `http://localhost:3000/admin/users`
- Bookings: `http://localhost:3000/admin/bookings`
- Vehicles: `http://localhost:3000/admin/vehicles`
- Tours: `http://localhost:3000/admin/tours`
- Pricing: `http://localhost:3000/admin/pricing`
- Reports: `http://localhost:3000/admin/reports`
- Settings: `http://localhost:3000/admin/settings`

## 📝 Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## 🔑 Test Accounts (for development)

Create these in your backend or use existing:

```
Customer:
  email: customer@test.com
  password: password123
  role: customer

Driver:
  email: driver@test.com
  password: password123
  role: driver

Guide:
  email: guide@test.com
  password: password123
  role: guide

Admin:
  email: admin@test.com
  password: password123
  role: admin
```

## 📦 Key Files

- `app/*/layout.tsx` - Portal layouts with navigation
- `app/*/dashboard/page.tsx` - Portal dashboards
- `components/protected-route.tsx` - Role-based protection
- `hooks/use-auth.ts` - Authentication hook
- `store/auth-store.ts` - Auth state management
- `types/index.ts` - TypeScript definitions

## 🌐 Important Links

- **GitHub:** https://github.com/appsbeke/tours-taxi-frontend
- **Backend:** https://tours-taxi-backend.onrender.com
- **API Docs:** https://tours-taxi-backend.onrender.com/api/docs

## 📚 Documentation

- `README.md` - Full project documentation
- `COMPLETION_REPORT.md` - Comprehensive completion report
- `FINAL_SUMMARY.md` - Project summary and metrics
- `DEPLOYMENT.md` - Deployment instructions

## ✅ Verification Checklist

Before deployment:
- [ ] Environment variables set
- [ ] Backend API accessible
- [ ] Build successful
- [ ] All portals tested
- [ ] Mobile responsiveness checked
- [ ] Authentication working
- [ ] Protected routes tested
