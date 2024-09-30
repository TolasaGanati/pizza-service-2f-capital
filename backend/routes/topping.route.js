import express from 'express';
import { createTopping, getAllToppings, getToppingById, updateTopping, deleteTopping } from '../controllers/toppingController.js';
import { authorize } from '../middleware/caslMiddleware.js';

const router = express.Router();

// Create a new topping (admin only)
router.post('/', authorize, createTopping);

// Get all toppings (public route)
router.get('/', getAllToppings);

// Get topping by ID (public route)
router.get('/:id', getToppingById);

// Update topping details (admin only)
router.put('/:id', authorize, updateTopping);

// Delete topping (admin only)
router.delete('/:id', authorize, deleteTopping);

export default router;
