import HotelHero from '../components/hotel/HotelHero';
import HotelAbout from '../components/hotel/HotelAbout';
import HotelRooms from '../components/hotel/HotelRooms';
import HotelAmenities from '../components/hotel/HotelAmenities';
import HotelGallery from '../components/hotel/HotelGallery';
import HotelTestimonials from '../components/hotel/HotelTestimonials';
import HotelBooking from '../components/hotel/HotelBooking';

export default function HomePage() {
  return (
    <main>
      <HotelHero />
      <HotelAbout />
      <HotelRooms />
      <HotelAmenities />
      <HotelGallery />
      <HotelTestimonials />
      <HotelBooking />
    </main>
  );
}
