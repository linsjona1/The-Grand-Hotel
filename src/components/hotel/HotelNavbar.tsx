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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    // If on another page, navigate to the route or home hash
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm' : 'bg-[#faf8f5]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold tracking-wide text-[#8b6914]">
              The Grand<span className="text-[#c4a35a]">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link)}
                className="text-sm font-medium text-[#5c4d3c] hover:text-[#8b6914] transition-colors tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleBookNow}
              className="px-6 py-2.5 bg-[#8b6914] text-white text-sm font-medium rounded-sm hover:bg-[#6b5110] transition-colors tracking-wide uppercase cursor-pointer"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#5c4d3c]"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf8f5]/98 backdrop-blur-md border-t border-[#e8e0d5] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link)}
                  className="block px-4 py-3 text-sm font-medium text-[#5c4d3c] hover:text-[#8b6914] transition-colors tracking-wide uppercase"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleBookNow}
                className="block w-full text-center px-4 py-3 bg-[#8b6914] text-white text-sm font-medium rounded-sm hover:bg-[#6b5110] transition-colors tracking-wide uppercase mt-4 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
