import HotelBooking from '../components/hotel/HotelBooking';
import { Clock, CreditCard, ShieldCheck } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="pt-16 sm:pt-20 bg-[#faf8f5]">
      {/* Header Banner */}
      <div className="bg-[#2c2416] text-white py-12 sm:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c4a35a] uppercase tracking-widest text-xs font-semibold block">
            Reservations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2.5 mb-3 sm:mb-4">
            Direct Reservation Portal
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Guaranteed best available rates, complimentary room upgrade when available, and personalized concierge care.
          </p>
        </div>
      </div>

      {/* Main Reservation Section */}
      <HotelBooking />

      {/* FAQs and Policies */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#8b6914] font-semibold block">
              Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2c2416] mt-2">
              Reservation Policies & FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-md md:max-w-none mx-auto">
            <div className="p-5 sm:p-6 bg-[#faf8f5] rounded-sm text-center sm:text-left flex flex-col items-center sm:items-start border border-[#e8e0d5]/60">
              <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-3.5">
                <Clock className="w-5 h-5 text-[#8b6914]" />
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#2c2416] mb-2">Check-in & Check-out</h3>
              <p className="text-xs sm:text-sm text-[#5c4d3c] leading-relaxed">
                Standard check-in begins at 3:00 PM. Check-out is at 12:00 PM. Early check-in and late departures can be accommodated upon request.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#faf8f5] rounded-sm text-center sm:text-left flex flex-col items-center sm:items-start border border-[#e8e0d5]/60">
              <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-5 h-5 text-[#8b6914]" />
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#2c2416] mb-2">Flexible Cancellation</h3>
              <p className="text-xs sm:text-sm text-[#5c4d3c] leading-relaxed">
                Cancel up to 24 hours prior to standard check-in without penalty. Cancellations within 24 hours are subject to the first night's fee.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#faf8f5] rounded-sm text-center sm:text-left flex flex-col items-center sm:items-start border border-[#e8e0d5]/60">
              <div className="w-10 h-10 rounded-full bg-[#8b6914]/10 flex items-center justify-center mb-3.5">
                <CreditCard className="w-5 h-5 text-[#8b6914]" />
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#2c2416] mb-2">Payment & Security</h3>
              <p className="text-xs sm:text-sm text-[#5c4d3c] leading-relaxed">
                We accept all major credit cards, bank wire, and contactless payments. Your booking is confirmed directly with our front desk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
