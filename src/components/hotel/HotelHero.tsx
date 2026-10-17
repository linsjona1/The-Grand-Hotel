import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function HotelHero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#c4a35a] fill-[#c4a35a]" />
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
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto tracking-wide"
        >
          Where Timeless Elegance Meets Modern Luxury
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-all tracking-wide uppercase text-sm shadow-lg hover:shadow-xl cursor-pointer"
          >
            Reserve Your Stay
          </button>
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur text-white border border-white/30 font-medium rounded-sm hover:bg-white/20 transition-all tracking-wide uppercase text-sm cursor-pointer"
          >
            Discover More
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
