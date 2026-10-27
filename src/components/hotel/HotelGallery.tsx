import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/hotel/hero.jpg', alt: 'Grand Lobby' },
  { src: '/hotel/room1.jpg', alt: 'Deluxe Room' },
  { src: '/hotel/pool.jpg', alt: 'Infinity Pool' },
  { src: '/hotel/restaurant.jpg', alt: 'Fine Dining' },
  { src: '/hotel/spa.jpg', alt: 'Spa & Wellness' },
  { src: '/hotel/exterior.jpg', alt: 'Hotel Exterior' },
  { src: '/hotel/room2.jpg', alt: 'Ocean Suite' },
  { src: '/hotel/room3.jpg', alt: 'Presidential Suite' },
];

export default function HotelGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextImage = () => setLightbox((prev) => (prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-[#2c2416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <span className="text-xs sm:text-sm font-semibold text-[#c4a35a] tracking-widest uppercase block">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-3 mb-3">
            Moments of <span className="text-[#c4a35a]">Luxury</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Glimpses of the extraordinary experiences that await you at The Grand.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.04 * index }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${
                index === 0 || index === 5
                  ? 'col-span-2 aspect-video sm:aspect-auto sm:h-64 md:h-80'
                  : 'aspect-square sm:aspect-auto sm:h-52 md:h-64'
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-[#8b6914] text-white flex items-center justify-center transition-colors cursor-pointer z-30"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#8b6914] text-white flex items-center justify-center transition-colors cursor-pointer z-30 backdrop-blur-xs"
            aria-label="View previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Main Content */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-h-[68vh] sm:max-h-[78vh] w-auto max-w-full mx-auto object-contain rounded-xs shadow-2xl"
            />
            <p className="text-center text-white/90 mt-3 font-serif text-sm sm:text-base">
              {galleryImages[lightbox].alt}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#8b6914] text-white flex items-center justify-center transition-colors cursor-pointer z-30 backdrop-blur-xs"
            aria-label="View next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
