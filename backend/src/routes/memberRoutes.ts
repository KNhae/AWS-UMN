import { Router } from 'express';
import {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
} from '../handlers/memberHandlers';
import { authenticate } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', getMembers);
router.get('/:id', getMemberById);

// Protected routes
router.post('/', authenticate, createMember);
router.put('/:id', authenticate, updateMember);
router.delete('/:id', authenticate, deleteMember);

export default router;
