import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#faf8f5]">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-[#8b6914]/10 text-[#8b6914] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <span className="text-sm uppercase tracking-widest text-[#8b6914] font-semibold">404 Error</span>
        <h1 className="text-4xl font-serif font-bold text-[#2c2416] mt-2 mb-4">Page Not Found</h1>
        <p className="text-[#5c4d3c] text-sm leading-relaxed mb-8">
          The sanctuary you are looking for does not exist or has been relocated. Let us guide you back to comfort.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#8b6914] text-white font-medium rounded-sm hover:bg-[#6b5110] transition-colors uppercase text-sm tracking-wide shadow-md"
        >
          <Home className="w-4 h-4" />
          Return to Sanctuary
        </Link>
      </div>
    </div>
  );
}
