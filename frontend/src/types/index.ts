export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
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
  name: string;
  role: 'admin' | 'member';
}
