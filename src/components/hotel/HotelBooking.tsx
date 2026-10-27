import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

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
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { selectedRoom, setSelectedRoom, addBooking } = useBooking();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: selectedRoom || 'deluxe',
    notes: '',
  });

  // Sync when selectedRoom from context changes
  useEffect(() => {
    if (selectedRoom) {
      setForm((prev) => ({ ...prev, room: selectedRoom }));
    }
  }, [selectedRoom]);

  // Calculate nights and estimated total
  const calculateTotal = () => {
    if (!form.checkIn || !form.checkOut) return { nights: 1, total: roomPrices[form.room] || 250 };
    const start = new Date(form.checkIn);
    const end = new Date(form.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    const total = nights * (roomPrices[form.room] || 250);
    return { nights, total };
  };

  const { nights, total } = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomName = roomNames[form.room] || form.room;
    const roomPrice = roomPrices[form.room] || 250;

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
      `Estimated Nights: ${nights}\n` +
      `Estimated Total: $${total}\n` +
      `Number of Guests: ${form.guests}\n\n` +
      (form.notes ? `Special Requests:\n${form.notes}\n\n` : '') +
      `──────────────────────────────────\n` +
      `Please confirm availability and send payment instructions.\n\n` +
      `Best regards,\n` +
      `${form.name}`
    );

    addBooking(form);
    window.location.href = `mailto:linusjona7@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      room: 'deluxe',
      notes: '',
    });
  };

  return (
    <section id="booking" className="py-16 sm:py-24 lg:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Context & Contact */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 w-full"
          >
            <span className="text-xs sm:text-sm font-semibold text-[#8b6914] tracking-widest uppercase block">
              Reservations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2c2416] mt-3 mb-4 sm:mb-6">
              Book Your <span className="text-[#8b6914]">Stay</span>
            </h2>
            <p className="text-[#5c4d3c] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Ready to experience luxury? Fill out the reservation details and our concierge will
              personally prepare your stay. Your email app will open with all details pre-filled.
            </p>

            {/* Value Guarantees */}
            <div className="space-y-3 sm:space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {[
                'Best price guarantee direct with hotel',
                'Free cancellation up to 24 hours prior to check-in',
                'Complimentary gourmet breakfast included',
                'High-speed WiFi & airport pickup service',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8b6914] shrink-0" />
                  <span className="text-[#5c4d3c] text-xs sm:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Box */}
            <div className="p-5 sm:p-6 bg-[#2c2416] text-white rounded-sm shadow-md text-center sm:text-left">
              <div className="text-[#c4a35a] text-xs font-semibold tracking-widest uppercase mb-3">
                Concierge & Direct Bookings
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 justify-center sm:justify-start">
                <a
                  href="tel:+2347043935217"
                  className="flex items-center justify-center sm:justify-start gap-2.5 text-white hover:text-[#c4a35a] transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-[#c4a35a]" />
                  <span className="text-base sm:text-lg font-serif">+234 704 393 5217</span>
                </a>
                <a
                  href="mailto:linusjona7@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-2.5 text-white/80 hover:text-[#c4a35a] transition-colors text-xs sm:text-sm py-1 break-all"
                >
                  <Mail className="w-4 h-4 text-[#c4a35a] shrink-0" />
                  <span>linusjona7@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-xl mx-auto lg:max-w-none"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 sm:p-10 rounded-sm shadow-lg border border-[#e8e0d5] text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#8b6914]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#8b6914]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2c2416] mb-2">Reservation Request Sent!</h3>
                <p className="text-[#5c4d3c] text-xs sm:text-sm mb-3">
                  Your booking request for the <strong className="text-[#8b6914]">{roomNames[form.room]}</strong> has been initiated.
                </p>
                <p className="text-[#8a7a6a] text-xs sm:text-sm mb-6">
                  Check your mail client to verify that your message was sent to <strong className="text-[#5c4d3c]">linusjona7@gmail.com</strong>.
                </p>

                <div className="bg-[#faf8f5] p-4 rounded-sm text-left mb-6 text-xs sm:text-sm text-[#5c4d3c] space-y-1.5 border border-[#e8e0d5]">
                  <div><strong>Guest:</strong> {form.name}</div>
                  <div><strong>Dates:</strong> {form.checkIn || 'TBD'} to {form.checkOut || 'TBD'} ({nights} {nights === 1 ? 'night' : 'nights'})</div>
                  <div><strong>Guests:</strong> {form.guests}</div>
                  <div><strong>Estimated Total:</strong> ${total}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:linusjona7@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors text-xs sm:text-sm uppercase tracking-wider"
                  >
                    <Mail className="w-4 h-4" />
                    Open Email Again
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border border-[#8b6914] text-[#8b6914] font-medium rounded-sm hover:bg-[#8b6914] hover:text-white transition-colors cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
                  >
                    New Reservation
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 sm:p-8 md:p-10 rounded-sm shadow-lg border border-[#e8e0d5] space-y-4 sm:space-y-5"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Jonathan Linus"
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors"
                    />
                  </div>
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Room */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors"
                    />
                  </div>
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Room Type *
                    </label>
                    <select
                      value={form.room}
                      onChange={(e) => {
                        setForm({ ...form, room: e.target.value });
                        setSelectedRoom(e.target.value);
                      }}
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors cursor-pointer"
                    >
                      <option value="deluxe">Deluxe Room ($250/night)</option>
                      <option value="ocean">Ocean Suite ($450/night)</option>
                      <option value="presidential">Presidential Suite ($950/night)</option>
                    </select>
                  </div>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Check-In *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.checkIn}
                      onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Check-Out *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.checkOut}
                      onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                      Guests *
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="w-full min-w-0">
                  <label className="block text-xs font-semibold text-[#5c4d3c] tracking-wider uppercase mb-1.5">
                    Special Requests & Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Dietary requirements, high floor, early arrival..."
                    className="w-full min-w-0 px-3.5 py-3 bg-[#faf8f5] border border-[#e8e0d5] rounded-sm focus:outline-none focus:border-[#8b6914] text-sm transition-colors resize-none"
                  />
                </div>

                {/* Estimate Summary */}
                <div className="bg-[#f5f0e8] p-3.5 sm:p-4 rounded-sm flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#5c4d3c] font-medium">Estimated Stay ({nights} {nights === 1 ? 'night' : 'nights'}):</span>
                  <span className="text-lg sm:text-xl font-serif font-bold text-[#8b6914]">${total}</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-[#8b6914] text-white font-semibold rounded-sm hover:bg-[#6b5110] transition-colors tracking-wider uppercase text-xs sm:text-sm shadow-md hover:shadow-lg cursor-pointer"
                >
                  Submit Reservation Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
