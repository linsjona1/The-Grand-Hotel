import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', to: '/' },
  { name: 'About', href: '#about', to: '/about' },
  { name: 'Rooms', href: '#rooms', to: '/rooms' },
  { name: 'Amenities', href: '#amenities', to: '/#amenities' },
  { name: 'Gallery', href: '#gallery', to: '/#gallery' },
  { name: 'Contact', href: '#booking', to: '/booking' },
];

export default function HotelNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (link.to.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(link.to);
    }
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector('#booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/booking');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          scrolled || isOpen
            ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d5]/60'
            : 'bg-[#faf8f5]/85 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group focus:outline-none">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wide text-[#8b6914]">
                The Grand<span className="text-[#c4a35a]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link)}
                  className="text-xs lg:text-sm font-medium text-[#5c4d3c] hover:text-[#8b6914] transition-colors tracking-wider uppercase"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleBookNow}
                className="px-5 lg:px-6 py-2.5 bg-[#8b6914] text-white text-xs lg:text-sm font-medium rounded-sm hover:bg-[#6b5110] transition-colors tracking-wider uppercase cursor-pointer shadow-sm hover:shadow"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm text-[#5c4d3c] hover:text-[#8b6914] hover:bg-[#8b6914]/10 transition-colors cursor-pointer"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#faf8f5] border-t border-[#e8e0d5] shadow-xl overflow-hidden"
            >
              <div className="max-w-md mx-auto px-6 py-6 flex flex-col items-center text-center space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link)}
                    className="w-full py-3 text-sm font-semibold text-[#5c4d3c] hover:text-[#8b6914] hover:bg-[#8b6914]/5 rounded-sm transition-all tracking-wider uppercase"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="w-full pt-4 border-t border-[#e8e0d5]/80 mt-2">
                  <button
                    onClick={handleBookNow}
                    className="w-full py-3.5 bg-[#8b6914] text-white text-sm font-semibold rounded-sm hover:bg-[#6b5110] transition-colors tracking-wider uppercase shadow-md cursor-pointer"
                  >
                    Reserve Your Stay
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 md:hidden"
        />
      )}
    </>
  );
}
