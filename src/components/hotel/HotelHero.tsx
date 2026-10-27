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
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hotel/hero.jpg"
          alt="The Grand Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-24 pb-20 flex flex-col items-center justify-center">
        {/* Star Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 mb-5 sm:mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#c4a35a] fill-[#c4a35a]" />
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-3 sm:mb-4 tracking-wide text-center"
        >
          The Grand
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto tracking-wide text-center px-2"
        >
          Where Timeless Elegance Meets Modern Luxury
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-all tracking-wider uppercase text-xs sm:text-sm shadow-lg hover:shadow-xl cursor-pointer text-center"
          >
            Reserve Your Stay
          </button>
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-white/10 backdrop-blur text-white border border-white/30 font-medium rounded-sm hover:bg-white/20 transition-all tracking-wider uppercase text-xs sm:text-sm cursor-pointer text-center"
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer p-2"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8" />
      </motion.button>
    </section>
  );
}
