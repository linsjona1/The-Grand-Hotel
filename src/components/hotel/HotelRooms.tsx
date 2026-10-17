import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Bed, Bath, Wifi, Tv, Wind, Coffee, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const roomsList = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 250,
    image: '/hotel/room1.jpg',
    size: '35 m²',
    guests: 2,
    description: 'Elegant comfort with city views, king-sized bed, and modern amenities.',
    features: ['King Bed', 'City View', 'Rain Shower'],
  },
  {
    id: 'ocean',
    name: 'Ocean Suite',
    price: 450,
    image: '/hotel/room2.jpg',
    size: '55 m²',
    guests: 3,
    description: 'Panoramic ocean views with a private balcony and separate living area.',
    features: ['Ocean View', 'Balcony', 'Living Area'],
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: 950,
    image: '/hotel/room3.jpg',
    size: '120 m²',
    guests: 4,
    description: 'The pinnacle of luxury with butler service, dining room, and spa bath.',
    features: ['Butler Service', 'Dining Room', 'Spa Bath'],
  },
];

const amenityIcons = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Wind, label: 'AC' },
  { icon: Coffee, label: 'Mini Bar' },
  { icon: Bath, label: 'Spa Bath' },
  { icon: Bed, label: 'Premium Bed' },
];

export default function HotelRooms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const { setSelectedRoom } = useBooking();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoom(roomId);
    if (location.pathname === '/') {
      const element = document.querySelector('#booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/booking');
  };

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#8b6914] tracking-widest uppercase">Accommodations</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2c2416] mt-4 mb-4">
            Our <span className="text-[#8b6914]">Rooms</span> & Suites
          </h2>
          <p className="text-[#5c4d3c] max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the ultimate comfort and relaxation 
            during your stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {roomsList.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredRoom(index)}
              onMouseLeave={() => setHoveredRoom(null)}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm shadow-sm">
                    <span className="text-[#8b6914] font-bold">${room.price}</span>
                    <span className="text-[#8a7a6a] text-xs">/night</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-serif font-bold text-[#2c2416]">{room.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-[#8a7a6a]">
                      <span>{room.size}</span>
                      <span className="mx-1">•</span>
                      <span>{room.guests} Guests</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c4d3c] leading-relaxed mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feat) => (
                      <span
                        key={feat}
                        className="px-3 py-1 text-xs bg-[#f5f0e8] text-[#5c4d3c] rounded-sm"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={() => handleSelectRoom(room.id)}
                  className="w-full text-center py-3 border border-[#8b6914] text-[#8b6914] font-medium rounded-sm hover:bg-[#8b6914] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Room Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {amenityIcons.map((am) => (
            <div key={am.label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#8b6914]/10 flex items-center justify-center">
                <am.icon className="w-5 h-5 text-[#8b6914]" />
              </div>
              <span className="text-xs text-[#5c4d3c]">{am.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
