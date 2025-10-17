import api from './api';
import { Member } from '../types';

export const memberService = {
  getAllMembers: async (): Promise<Member[]> => {
    const response = await api.get('/members');
    return response.data.data;
  },

  getMemberById: async (id: string): Promise<Member> => {
    const response = await api.get(`/members/${id}`);
    return response.data.data;
  },

  createMember: async (member: Partial<Member>): Promise<Member> => {
    const response = await api.post('/members', member);
    return response.data.data;
  },

  updateMember: async (id: string, member: Partial<Member>): Promise<Member> => {
    const response = await api.put(`/members/${id}`, member);
    return response.data.data;
  },

  deleteMember: async (id: string): Promise<void> => {
    await api.delete(`/members/${id}`);
  },
};
