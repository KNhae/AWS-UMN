import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';
import * as eventService from '../services/eventService';

export const createEvent = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json({
      status: 'success',
      data: event
    });
  } catch (error) {
    next(error);
  }
};

export const getEvents = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const events = await eventService.getAllEvents();
    res.status(200).json({
      status: 'success',
      data: events
    });
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const event = await eventService.getEventById(req.params.id);

    if (!event) {
      throw new AppError('Event not found', 404);
    }

    res.status(200).json({
      status: 'success',
      data: event
    });
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      data: event
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    await eventService.deleteEvent(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
