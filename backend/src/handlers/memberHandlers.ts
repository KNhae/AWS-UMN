import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';
import * as memberService from '../services/memberService';

export const getMembers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const members = await memberService.getAllMembers();
    res.status(200).json({
      status: 'success',
      data: members
    });
  } catch (error) {
    next(error);
  }
};

export const getMemberById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const member = await memberService.getMemberById(req.params.id);

    if (!member) {
      throw new AppError('Member not found', 404);
    }

    res.status(200).json({
      status: 'success',
      data: member
    });
  } catch (error) {
    next(error);
  }
};

export const createMember = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const member = await memberService.createMember(req.body);
    res.status(201).json({
      status: 'success',
      data: member
    });
  } catch (error) {
    next(error);
  }
};

export const updateMember = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const member = await memberService.updateMember(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      data: member
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMember = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    await memberService.deleteMember(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
