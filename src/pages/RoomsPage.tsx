import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const detailedRooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    category: 'Rooms',
    price: 250,
    image: '/hotel/room1.jpg',
    size: '35 m² / 376 sq ft',
    guests: 'Up to 2 Guests',
    bed: '1 King or 2 Queen Beds',
    view: 'City Skyline View',
    description: 'Designed for comfort and serenity, the Deluxe Room features bespoke furnishings, luxurious Egyptian cotton linens, marble bathroom with rain shower, and oversized soundproof windows offering captivating city views.',
    features: ['City Skyline View', 'Marble Bathroom', 'Rain Shower', 'Espresso Machine', 'High-Speed WiFi', '24-Hour Room Service'],
  },
  {
    id: 'ocean',
    name: 'Ocean Suite',
    category: 'Suites',
    price: 450,
    image: '/hotel/room2.jpg',
    size: '55 m² / 592 sq ft',
    guests: 'Up to 3 Guests',
    bed: '1 Super King Bed',
    view: 'Panoramic Ocean & Coastline',
    description: 'The Ocean Suite offers an expansive sanctuary with a private furnished balcony, separate living lounge, walk-in closet, and a deep soaking bathtub positioned with sweeping views of the azure coast.',
    features: ['Private Furnished Balcony', 'Separate Living Room', 'Deep Soaking Bathtub', 'Walk-in Wardrobe', 'Complimentary Champagne', 'VIP Concierge Access'],
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    category: 'Suites',
    price: 950,
    image: '/hotel/room3.jpg',
    size: '120 m² / 1290 sq ft',
    guests: 'Up to 4 Guests',
    bed: '1 Emperor Master + 1 King Bed',
    view: '360° Panoramic Skyline & Ocean',
    description: 'The crown jewel of The Grand. Spanning an entire corner penthouse with private elevator access, dedicated 24-hour butler, formal dining room for eight, master marble spa, and private terrace jacuzzi.',
    features: ['Dedicated 24/7 Butler', 'Private Elevator Entry', 'Dining Room for 8', 'Terrace Jacuzzi', 'Chauffeur Airport Transfers', 'Executive Lounge Privileges'],
  },
];

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { setSelectedRoom } = useBooking();
  const navigate = useNavigate();

  const filtered = activeCategory === 'All'
    ? detailedRooms
    : detailedRooms.filter(r => r.category === activeCategory);

  const handleBook = (roomId: string) => {
    setSelectedRoom(roomId);
    navigate('/booking');
  };

  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-20 bg-[#faf8f5]">
      {/* Header Banner */}
      <div className="bg-[#2c2416] text-white py-12 sm:py-16 px-4 mb-10 sm:mb-14 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c4a35a] uppercase tracking-widest text-xs font-semibold block">
            Accommodations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2.5 mb-3 sm:mb-4">
            Rooms & Suites
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Each retreat is custom designed with refined textures, handcrafted furniture, and state-of-the-art luxuries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {['All', 'Rooms', 'Suites'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#8b6914] text-white shadow-xs'
                  : 'bg-white text-[#5c4d3c] border border-[#e8e0d5] hover:border-[#8b6914]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Room Cards */}
        <div className="space-y-8 sm:space-y-12">
          {filtered.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#e8e0d5] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 max-w-xl lg:max-w-none mx-auto"
            >
              <div className="lg:col-span-6 relative h-60 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-semibold uppercase text-[#8b6914] tracking-wider rounded-sm shadow-xs">
                  {room.category}
                </div>
              </div>

              <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#2c2416]">
                      {room.name}
                    </h2>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-serif font-bold text-[#8b6914]">${room.price}</span>
                      <span className="text-[#8a7a6a] text-xs"> / night</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-[#8a7a6a] mb-4">
                    <span><strong>Size:</strong> {room.size}</span>
                    <span>•</span>
                    <span><strong>Capacity:</strong> {room.guests}</span>
                    <span>•</span>
                    <span><strong>Bed:</strong> {room.bed}</span>
                  </div>

                  <p className="text-[#5c4d3c] text-xs sm:text-sm leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-6 sm:mb-8">
                    {room.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#5c4d3c]">
                        <Check className="w-4 h-4 text-[#8b6914] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#f0eae1]">
                  <button
                    onClick={() => handleBook(room.id)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Reserve {room.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
