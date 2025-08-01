// Global TypeScript type definitions for the Athletic Zone Ajaccio project

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Class/Course types
export interface GymClass {
  id: string;
  name: string;
  description: string;
  instructor: string;
  duration: number; // in minutes
  maxParticipants: number;
  currentParticipants: number;
  date: Date;
  price: number;
}

// Booking types
export interface Booking {
  id: string;
  userId: string;
  classId: string;
  status: 'confirmed' | 'cancelled' | 'pending';
  createdAt: Date;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

// Component prop types
export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}
