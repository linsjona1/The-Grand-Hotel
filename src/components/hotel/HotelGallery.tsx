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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextImage = () => setLightbox((prev) => (prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#2c2416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#c4a35a] tracking-widest uppercase">Gallery</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mt-4 mb-4">
            Moments of <span className="text-[#c4a35a]">Luxury</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Glimpses of the extraordinary experiences that await you at The Grand.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group h-64 ${
                index === 0 || index === 5 ? 'md:col-span-2 md:h-80' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.alt}</span>
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 cursor-pointer z-10"
            aria-label="Close image lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 cursor-pointer z-10"
            aria-label="View previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-sm"
            />
            <p className="text-center text-white/80 mt-4 font-serif text-lg">
              {galleryImages[lightbox].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 cursor-pointer z-10"
            aria-label="View next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
