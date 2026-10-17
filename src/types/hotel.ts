export interface Room {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  guests: number;
  description: string;
  features: string[];
}

export interface Amenity {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  notes?: string;
}
