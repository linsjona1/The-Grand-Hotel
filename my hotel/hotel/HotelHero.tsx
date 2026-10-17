import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function HotelHero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hotel/hero.jpg"
          alt="The Grand Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#c4a35a] fill-[#c4a35a]" />
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-white mb-4 tracking-wide"
        >
          The Grand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 font-light tracking-widest uppercase mb-2"
        >
          Luxury Hotel & Resort
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-px bg-[#c4a35a] mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Experience unparalleled luxury in the heart of the city. 
          Where timeless elegance meets modern comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors tracking-wide"
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 border border-white/40 text-white font-medium rounded-sm hover:bg-white/10 transition-colors tracking-wide"
          >
            Explore Rooms
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
