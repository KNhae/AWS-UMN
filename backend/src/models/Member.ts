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
