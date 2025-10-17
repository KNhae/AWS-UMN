import api from './api';
import { Event } from '../types';

export const eventService = {
  getAllEvents: async (): Promise<Event[]> => {
    const response = await api.get('/events');
    return response.data.data;
  },

  getEventById: async (id: string): Promise<Event> => {
    const response = await api.get(`/events/${id}`);
    return response.data.data;
  },

  createEvent: async (event: Partial<Event>): Promise<Event> => {
    const response = await api.post('/events', event);
    return response.data.data;
  },

  updateEvent: async (id: string, event: Partial<Event>): Promise<Event> => {
    const response = await api.put(`/events/${id}`, event);
    return response.data.data;
  },

  deleteEvent: async (id: string): Promise<void> => {
    await api.delete(`/events/${id}`);
  },
};
