// Shared types between frontend and backend

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO 8601 format
  location: string;
  imageUrl?: string;
  registrationLink?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'officer' | 'member';
  major?: string;
  graduationYear?: number;
  bio?: string;
  linkedIn?: string;
  github?: string;
  imageUrl?: string;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'member';
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
}
