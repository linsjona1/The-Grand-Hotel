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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#8b6914] tracking-widest uppercase">Facilities</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2c2416] mt-4 mb-4">
            World-Class <span className="text-[#8b6914]">Amenities</span>
          </h2>
          <p className="text-[#5c4d3c] max-w-2xl mx-auto">
            Everything you need for an unforgettable stay, right at your fingertips.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative rounded-sm overflow-hidden"
            >
              <div className="relative h-72">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-3">
                  <amenity.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{amenity.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
