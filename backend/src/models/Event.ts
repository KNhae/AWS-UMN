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
