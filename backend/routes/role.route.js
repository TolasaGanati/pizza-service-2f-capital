import express from 'express';
import { createRole, getAllRoles, assignRole } from '../controllers/roleController.js';
import { authorize } from '../middleware/caslMiddleware.js';

const router = express.Router();

// Create a new role (admin only)
router.post('/', authorize, createRole);

// Get all roles (admin only)
router.get('/', authorize, getAllRoles);

// Assign role to user (admin only)
router.post('/assign', authorize, assignRole);

export default router;
