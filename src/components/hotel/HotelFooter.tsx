import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function HotelFooter() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
                  aria-label="Social Link"
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
              {[
                { label: 'About Us', id: '#about' },
                { label: 'Our Rooms', id: '#rooms' },
                { label: 'Amenities', id: '#amenities' },
                { label: 'Gallery', id: '#gallery' },
                { label: 'Reservations', id: '#booking' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.id}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="text-white/60 hover:text-[#c4a35a] transition-colors text-sm"
                  >
                    {link.label}
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
                <a href="tel:+2347043935217" className="text-white/60 hover:text-[#c4a35a] transition-colors text-sm">
                  +234 704 393 5217
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c4a35a] shrink-0" />
                <a href="mailto:linusjona7@gmail.com" className="text-white/60 hover:text-[#c4a35a] transition-colors text-sm">
                  linusjona7@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c4a35a] shrink-0" />
                <span className="text-white/60 text-sm">24/7 Front Desk & Concierge</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[#c4a35a] mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Subscribe to receive exclusive offers, seasonal experiences, and updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to The Grand Newsletter!'); }} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-sm text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#c4a35a] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors text-sm tracking-wide uppercase cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} The Grand Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
