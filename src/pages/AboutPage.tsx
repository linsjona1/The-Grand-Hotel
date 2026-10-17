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
    <div className="pt-24 bg-[#faf8f5]">
      {/* Header Banner */}
      <div className="bg-[#2c2416] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c4a35a] uppercase tracking-widest text-xs font-semibold">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mt-3 mb-4">A Legacy of Timeless Hospitality</h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Discover the rich history, passion, and people who make The Grand an unparalleled destination.
          </p>
        </div>
      </div>

      <HotelAbout />

      {/* Hotel Philosophy / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#8b6914] font-semibold">Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2c2416] mt-2">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-[#faf8f5] rounded-sm border border-[#e8e0d5] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-[#8b6914]" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#5c4d3c] leading-relaxed">{v.desc}</p>
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
