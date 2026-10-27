import HotelAbout from '../components/hotel/HotelAbout';
import HotelTestimonials from '../components/hotel/HotelTestimonials';
import { Award, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Compass,
    title: 'Heritage & Legacy',
    desc: 'Founded in 1985, The Grand remains an iconic beacon of luxury hospitality, blending classical elegance with forward-thinking design.'
  },
  {
    icon: HeartHandshake,
    title: 'Uncompromised Service',
    desc: 'Every stay is personally tailored. Our round-the-clock concierge team anticipates every requirement with discretion and grace.'
  },
  {
    icon: Sparkles,
    title: 'Culinary Artistry',
    desc: 'Three Michelin-calibre dining venues celebrate local ingredients fused with global gastronomic artistry.'
  },
  {
    icon: Award,
    title: 'Sustainable Luxury',
    desc: 'Committed to green hospitality, certified zero single-use plastics, and renewable energy conservation initiatives.'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20 bg-[#faf8f5]">
      {/* Header Banner */}
      <div className="bg-[#2c2416] text-white py-12 sm:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c4a35a] uppercase tracking-widest text-xs font-semibold block">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2.5 mb-3 sm:mb-4">
            A Legacy of Timeless Hospitality
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Discover the rich history, passion, and people who make The Grand an unparalleled destination.
          </p>
        </div>
      </div>

      <HotelAbout />

      {/* Hotel Philosophy / Values */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#8b6914] font-semibold block">
              Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2c2416] mt-2">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-md sm:max-w-none mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 sm:p-6 bg-[#faf8f5] rounded-sm border border-[#e8e0d5] flex flex-col items-center sm:items-start text-center sm:text-left justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-[#8b6914]" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#2c2416] mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5c4d3c] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HotelTestimonials />
    </div>
  );
}
