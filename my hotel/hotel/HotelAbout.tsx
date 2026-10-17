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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-[#8b6914] tracking-widest uppercase">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2c2416] mt-4 mb-6">
              A Legacy of <span className="text-[#8b6914]">Excellence</span>
            </h2>
            <p className="text-[#5c4d3c] leading-relaxed mb-4">
              Since 1985, The Grand has been the epitome of luxury hospitality. Nestled in the 
              heart of the city, our hotel offers an unforgettable blend of timeless elegance 
              and contemporary sophistication.
            </p>
            <p className="text-[#5c4d3c] leading-relaxed mb-8">
              With over 200 meticulously designed rooms and suites, world-class dining, and 
              a full-service spa, we create experiences that linger long after your stay. 
              Every detail is crafted to exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center shrink-0">
                    <feat.icon className="w-5 h-5 text-[#8b6914]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2c2416] text-sm">{feat.title}</div>
                    <div className="text-xs text-[#8a7a6a]">{feat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/hotel/exterior.jpg"
                alt="The Grand Hotel Exterior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#8b6914] text-white p-8 rounded-sm">
              <div className="text-4xl font-serif font-bold">35+</div>
              <div className="text-sm text-white/80 tracking-wide">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
