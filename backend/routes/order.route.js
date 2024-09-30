import express from 'express';
import { deleteOrder } from '../controllers/orderController.js';
import { authorize } from '../middleware/caslMiddleware.js';

const router = express.Router();

// Create a new order (authenticated users only)
router.post('/', authorize);

// Get all orders (admin only)
router.get('/', authorize );

// Get order by ID (admin or owner of the order)
router.get('/:id', authorize);

// Update order status (admin only)
router.put('/:id/status', authorize);

// Delete order (admin only)
router.delete('/:id', authorize, deleteOrder);

export default router;
