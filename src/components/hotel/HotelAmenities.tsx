import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UtensilsCrossed, Dumbbell, Waves, Wine, Car, Baby } from 'lucide-react';

const amenities = [
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    description: 'Three world-class restaurants serving international and local cuisine crafted by award-winning chefs.',
    image: '/hotel/restaurant.jpg',
  },
  {
    icon: Waves,
    title: 'Infinity Pool',
    description: 'A stunning rooftop infinity pool with panoramic city views and private cabanas.',
    image: '/hotel/pool.jpg',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with personal trainers, yoga studio, and wellness programs.',
    image: '/hotel/spa.jpg',
  },
  {
    icon: Wine,
    title: 'Sky Lounge',
    description: 'An elegant rooftop bar offering signature cocktails and breathtaking sunset views.',
    image: '/hotel/hero.jpg',
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Complimentary valet service and secure underground parking for all guests.',
    image: '/hotel/exterior.jpg',
  },
  {
    icon: Baby,
    title: 'Kids Club',
    description: 'Supervised activities and entertainment for children of all ages.',
    image: '/hotel/room1.jpg',
  },
];

export default function HotelAmenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="amenities" className="py-16 sm:py-24 lg:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <span className="text-xs sm:text-sm font-semibold text-[#8b6914] tracking-widest uppercase block">
            Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2c2416] mt-3 mb-3">
            World-Class <span className="text-[#8b6914]">Amenities</span>
          </h2>
          <p className="text-[#5c4d3c] text-sm sm:text-base leading-relaxed">
            Indulge in an array of premium amenities designed to make your stay unforgettable.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-md sm:max-w-none mx-auto">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-xs">
                  <item.icon className="w-5 h-5 text-[#8b6914]" />
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2c2416] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5c4d3c] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
