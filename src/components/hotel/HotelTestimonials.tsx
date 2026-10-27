import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Business Traveler',
    text: 'The Grand exceeded every expectation. From the moment I arrived, the staff made me feel like royalty. The presidential suite was absolutely breathtaking.',
    rating: 5,
  },
  {
    name: 'James & Emily Carter',
    role: 'Honeymooners',
    text: 'We chose The Grand for our honeymoon and it was the best decision. The ocean suite with its private balcony gave us memories we will cherish forever.',
    rating: 5,
  },
  {
    name: 'David Okonkwo',
    role: 'Family Vacation',
    text: 'Traveling with three kids can be stressful, but The Grand made it effortless. The kids club kept them entertained while we enjoyed the spa. Perfect balance!',
    rating: 5,
  },
];

export default function HotelTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#f5f0e8]">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2c2416] mt-3 mb-3">
            What Our <span className="text-[#8b6914]">Guests</span> Say
          </h2>
          <p className="text-[#5c4d3c] text-sm sm:text-base leading-relaxed">
            Read real stories from guests who have experienced the timeless luxury of The Grand.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-md md:max-w-none mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#c4a35a] mb-3 sm:mb-4" />
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c4a35a] fill-[#c4a35a]" />
                  ))}
                </div>
                <p className="text-[#5c4d3c] text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>
              <div className="border-t border-[#e8e0d5] pt-4 mt-auto">
                <div className="font-serif font-bold text-[#2c2416] text-sm sm:text-base">{t.name}</div>
                <div className="text-xs text-[#8a7a6a] mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
