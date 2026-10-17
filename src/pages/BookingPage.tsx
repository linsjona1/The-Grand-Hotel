import HotelBooking from '../components/hotel/HotelBooking';
import { HelpCircle, Clock, CreditCard, ShieldCheck } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="pt-24 bg-[#faf8f5]">
      {/* Header Banner */}
      <div className="bg-[#2c2416] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c4a35a] uppercase tracking-widest text-xs font-semibold">Reservations</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mt-3 mb-4">Direct Reservation Portal</h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Guaranteed best available rates, complimentary room upgrade when available, and personalized concierge care.
          </p>
        </div>
      </div>

      {/* Main Reservation Section */}
      <HotelBooking />

      {/* FAQs and Policies */}
      <section className="py-16 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8b6914] font-semibold">Information</span>
            <h2 className="text-3xl font-serif font-bold text-[#2c2416] mt-2">Reservation Policies & FAQs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#faf8f5] rounded-sm">
              <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#8b6914]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">Check-in & Check-out</h3>
              <p className="text-sm text-[#5c4d3c] leading-relaxed">
                Standard check-in begins at 3:00 PM. Check-out is at 12:00 PM. Early check-in and late departures can be accommodated upon request.
              </p>
            </div>

            <div className="p-6 bg-[#faf8f5] rounded-sm">
              <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#8b6914]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">Flexible Cancellation</h3>
              <p className="text-sm text-[#5c4d3c] leading-relaxed">
                Cancel up to 24 hours prior to standard check-in without penalty. Cancellations within 24 hours are subject to the first night's fee.
              </p>
            </div>

            <div className="p-6 bg-[#faf8f5] rounded-sm">
              <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5 text-[#8b6914]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">Payment & Security</h3>
              <p className="text-sm text-[#5c4d3c] leading-relaxed">
                We accept all major credit cards, bank wire, and contactless payments. Your booking is confirmed directly with our front desk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
