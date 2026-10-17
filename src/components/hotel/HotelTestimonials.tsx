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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 sm:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#8b6914] tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2c2416] mt-4 mb-4">
            What Our <span className="text-[#8b6914]">Guests</span> Say
          </h2>
          <p className="text-[#5c4d3c] max-w-2xl mx-auto">
            Read real stories from guests who have experienced the timeless luxury of The Grand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white p-8 rounded-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#c4a35a] mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c4a35a] fill-[#c4a35a]" />
                  ))}
                </div>
                <p className="text-[#5c4d3c] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              </div>
              <div className="border-t border-[#e8e0d5] pt-4">
                <div className="font-serif font-bold text-[#2c2416]">{t.name}</div>
                <div className="text-xs text-[#8a7a6a]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
