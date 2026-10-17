import React, { createContext, useContext, useState } from 'react';
import { BookingData } from '../types/hotel';

interface BookingContextType {
  selectedRoom: string;
  setSelectedRoom: (room: string) => void;
  recentBookings: BookingData[];
  addBooking: (booking: BookingData) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedRoom, setSelectedRoom] = useState<string>('deluxe');
  const [recentBookings, setRecentBookings] = useState<BookingData[]>([]);

  const addBooking = (booking: BookingData) => {
    setRecentBookings((prev) => [booking, ...prev]);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedRoom,
        setSelectedRoom,
        recentBookings,
        addBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
