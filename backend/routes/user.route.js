import express from 'express';
import { register, login, getProfile, updateProfile, deleteUser } from '../controllers/userController.js';
import { authorize } from '../middleware/caslMiddleware.js';

const router = express.Router();

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get user profile (requires authentication)
router.get('/profile', authorize, getProfile);

// Update user profile (requires authentication)
router.put('/profile', authorize, updateProfile);

// Delete user by ID (admin or authorized users)
router.delete('/:id', authorize, deleteUser);

export default router;
