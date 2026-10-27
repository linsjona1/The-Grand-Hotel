import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';

const features = [
  { icon: Award, title: 'Award Winning', desc: 'Best Luxury Hotel 2024' },
  { icon: Clock, title: '24/7 Service', desc: 'Round-the-clock concierge' },
  { icon: Users, title: 'Expert Staff', desc: '500+ trained professionals' },
  { icon: Shield, title: 'Safe & Secure', desc: 'Advanced security systems' },
];

export default function HotelAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <span className="text-xs sm:text-sm font-semibold text-[#8b6914] tracking-widest uppercase block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2c2416] mt-3 mb-5">
              A Legacy of <span className="text-[#8b6914]">Excellence</span>
            </h2>
            <p className="text-[#5c4d3c] text-sm sm:text-base leading-relaxed mb-4">
              Since 1985, The Grand has been the epitome of luxury hospitality. Nestled in the 
              heart of the city, our hotel offers an unforgettable blend of timeless elegance 
              and contemporary sophistication.
            </p>
            <p className="text-[#5c4d3c] text-sm sm:text-base leading-relaxed mb-8">
              With over 200 meticulously designed rooms and suites, world-class dining, and 
              a full-service spa, we create experiences that linger long after your stay. 
              Every detail is crafted to exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center sm:items-start gap-3.5 p-3.5 sm:p-0 bg-white sm:bg-transparent rounded-sm sm:rounded-none border border-[#e8e0d5]/70 sm:border-0 shadow-xs sm:shadow-none"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center shrink-0">
                    <feat.icon className="w-5 h-5 text-[#8b6914]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2c2416] text-sm">{feat.title}</div>
                    <div className="text-xs text-[#8a7a6a] mt-0.5">{feat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & Badge Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-xl mx-auto lg:max-w-none w-full mt-6 lg:mt-0"
          >
            <div className="relative rounded-sm overflow-hidden shadow-xl">
              <img
                src="/hotel/exterior.jpg"
                alt="The Grand Hotel Exterior"
                className="w-full h-72 sm:h-[420px] lg:h-[480px] object-cover"
              />
            </div>
            {/* Safe responsive badge with no horizontal overflow */}
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-[#8b6914] text-white p-4 sm:p-6 lg:p-7 rounded-sm shadow-xl backdrop-blur-xs">
              <div className="text-3xl sm:text-4xl font-serif font-bold leading-tight">35+</div>
              <div className="text-xs sm:text-sm text-white/90 tracking-wider uppercase font-medium mt-0.5">
                Years of Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
