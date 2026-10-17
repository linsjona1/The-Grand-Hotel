import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function HotelFooter() {
  return (
    <footer className="bg-[#2c2416] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-[#c4a35a] mb-4">
              The Grand<span className="text-white">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A legacy of luxury since 1985. Experience world-class hospitality 
              in the heart of the city.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8b6914] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[#c4a35a] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Rooms', 'Amenities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link === 'About Us' ? 'about' : link === 'Our Rooms' ? 'rooms' : link === 'Contact' ? 'booking' : link.toLowerCase();
                      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-[#c4a35a] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[#c4a35a] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c4a35a] shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">123 Luxury Avenue, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c4a35a] shrink-0" />
                <span className="text-white/60 text-sm">+234 704 393 5217</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c4a35a] shrink-0" />
                <span className="text-white/60 text-sm">linusjona7@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c4a35a] shrink-0" />
                <span className="text-white/60 text-sm">24/7 Front Desk</span>
              </li>
            </ul>
          </div>

          {/* Developer Credit */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[#c4a35a] mb-6">Website By</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              This hotel website was designed and built by Linus Jonathan, a passionate software engineer.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[#c4a35a] hover:text-white transition-colors"
            >
              View Portfolio →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} The Grand Hotel. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Designed & Built by <span className="text-[#c4a35a]">Linus Jonathan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
