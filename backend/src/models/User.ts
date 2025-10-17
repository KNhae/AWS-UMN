export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'member';
  createdAt: string;
  updatedAt: string;
}
