<<<<<<< HEAD
# The Grand Hotel - 5-Star Luxury React Application

A modern, responsive, luxury 5-star hotel web application built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 📁 Project Structure

```text
Hotel/
├── public/
│   ├── favicon.svg               # Brand luxury gold favicon
│   └── hotel/                    # High-resolution hotel photography
│       ├── hero.jpg              # Lobby & chandelier
│       ├── exterior.jpg          # Hotel architecture & facade
│       ├── restaurant.jpg        # Fine dining venue
│       ├── pool.jpg              # Rooftop infinity pool
│       ├── spa.jpg               # Tranquil wellness & spa
│       ├── room1.jpg             # Deluxe Room
│       ├── room2.jpg             # Ocean Suite
│       └── room3.jpg             # Presidential Suite
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ScrollToTop.tsx   # Route transition scroll helper
│   │   └── hotel/
│   │       ├── HotelNavbar.tsx   # Sticky navigation with mobile menu
│   │       ├── HotelHero.tsx     # Hero banner with rating and CTAs
│   │       ├── HotelAbout.tsx    # Heritage, stats & highlights
│   │       ├── HotelRooms.tsx    # Accommodations showcase
│   │       ├── HotelAmenities.tsx# World-class amenities grid
│   │       ├── HotelGallery.tsx  # Interactive lightbox photo gallery
│   │       ├── HotelTestimonials.tsx # Guest reviews & ratings
│   │       ├── HotelBooking.tsx  # Dynamic reservation form
│   │       └── HotelFooter.tsx   # Footer links, newsletter & contacts
│   ├── pages/
│   │   ├── HomePage.tsx          # Full landing experience
│   │   ├── RoomsPage.tsx         # Dedicated rooms & suites page with filters
│   │   ├── BookingPage.tsx       # Dedicated reservation portal & policies
│   │   ├── AboutPage.tsx         # Heritage & philosophy story
│   │   └── NotFoundPage.tsx      # 404 error page
│   ├── context/
│   │   └── BookingContext.tsx    # Global room selection & reservations state
│   ├── types/
│   │   └── hotel.ts              # TypeScript interfaces
│   ├── App.tsx                   # Top-level routing layout
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Tailwind directives & typography
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```
>>>>>>> master
