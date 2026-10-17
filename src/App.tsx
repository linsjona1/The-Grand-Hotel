import { Routes, Route } from 'react-router-dom';
import HotelNavbar from './components/hotel/HotelNavbar';
import HotelFooter from './components/hotel/HotelFooter';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';
import { BookingProvider } from './context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2c2416]">
        <ScrollToTop />
        <HotelNavbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <HotelFooter />
      </div>
    </BookingProvider>
  );
}
