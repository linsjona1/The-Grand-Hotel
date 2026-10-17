import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Users, CheckCircle, Mail, Phone } from 'lucide-react';

const roomNames: Record<string, string> = {
  deluxe: 'Deluxe Room',
  ocean: 'Ocean Suite',
  presidential: 'Presidential Suite',
};

const roomPrices: Record<string, number> = {
  deluxe: 250,
  ocean: 450,
  presidential: 950,
};

export default function HotelBooking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: 'deluxe',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomName = roomNames[form.room];
    const roomPrice = roomPrices[form.room];

    const subject = encodeURIComponent(`Hotel Booking Request - ${roomName}`);
    const body = encodeURIComponent(
      `Dear The Grand Hotel Team,\n\n` +
      `I would like to request a booking with the following details:\n\n` +
      `──────────────────────────────────\n` +
      `GUEST INFORMATION\n` +
      `──────────────────────────────────\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || 'Not provided'}\n\n` +
      `──────────────────────────────────\n` +
      `BOOKING DETAILS\n` +
      `──────────────────────────────────\n` +
      `Room Type: ${roomName}\n` +
      `Rate: $${roomPrice} per night\n` +
      `Check-in: ${form.checkIn}\n` +
      `Check-out: ${form.checkOut}\n` +
      `Number of Guests: ${form.guests}\n\n` +
      (form.notes ? `Special Requests:\n${form.notes}\n\n` : '') +
      `──────────────────────────────────\n` +
      `Please confirm availability and send payment instructions.\n\n` +
      `Best regards,\n` +
      `${form.name}`
    );

    // Open email client with pre-filled booking details
    window.location.href = `mailto:linusjona7@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '2', room: 'deluxe', notes: '' });
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-[#8b6914] tracking-widest uppercase">Reservations</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2c2416] mt-4 mb-6">
              Book Your <span className="text-[#8b6914]">Stay</span>
            </h2>
            <p className="text-[#5c4d3c] leading-relaxed mb-8">
              Ready to experience luxury? Fill out the form and your email app will open 
              with all details pre-filled. Just hit send to complete your booking request.
            </p>

            <div className="space-y-4">
              {[
                'Best price guarantee',
                'Free cancellation up to 24 hours',
                'Complimentary breakfast included',
                'Earn loyalty points on every stay',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8b6914] shrink-0" />
                  <span className="text-[#5c4d3c]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <div className="p-6 bg-[#2c2416] rounded-sm">
                <div className="text-[#c4a35a] text-sm tracking-widest uppercase mb-3">Contact Us Directly</div>
                <a 
                  href="tel:+2347043935217" 
                  className="flex items-center gap-3 text-white hover:text-[#c4a35a] transition-colors mb-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-lg font-serif">+234 704 393 5217</span>
                </a>
                <a 
                  href="mailto:linusjona7@gmail.com" 
                  className="flex items-center gap-3 text-white/60 hover:text-[#c4a35a] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">linusjona7@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-sm shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#8b6914]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#8b6914]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2c2416] mb-2">Booking Request Ready!</h3>
                <p className="text-[#5c4d3c] mb-4">
                  Your email app should have opened with all the details pre-filled.
                </p>
                <p className="text-[#8a7a6a] text-sm mb-6">
                  Simply hit <strong className="text-[#5c4d3c]">Send</strong> in your email app to complete the request.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:linusjona7@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Open Email App
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-[#8b6914] hover:text-[#6b5110] transition-colors"
                  >
                    Make another booking →
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-serif font-bold text-[#2c2416] mb-6">Reservation Details</h3>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416]"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416]"
                        placeholder="+234..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Check-in *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a7a6a]" />
                        <input
                          type="date"
                          required
                          value={form.checkIn}
                          onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Check-out *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a7a6a]" />
                        <input
                          type="date"
                          required
                          value={form.checkOut}
                          onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a7a6a]" />
                        <select
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416] appearance-none bg-white"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5+">5+ Guests</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Room Type</label>
                      <select
                        value={form.room}
                        onChange={(e) => setForm({ ...form, room: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416] appearance-none bg-white"
                      >
                        <option value="deluxe">Deluxe Room - $250/night</option>
                        <option value="ocean">Ocean Suite - $450/night</option>
                        <option value="presidential">Presidential Suite - $950/night</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#5c4d3c] mb-2">Special Requests</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-4 py-3 border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] transition-colors text-[#2c2416] resize-none"
                      placeholder="Any special requests or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors tracking-wide flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Booking Request
                  </button>

                  <p className="text-xs text-center text-[#8a7a6a]">
                    This will open your email app with all details pre-filled. Just hit send!
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
