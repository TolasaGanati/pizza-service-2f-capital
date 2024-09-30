import express from 'express';
import { 
    createRestaurant, 
    getAllRestaurants, 
    getRestaurantById, 
    updateRestaurant, 
    deleteRestaurant 
} from '../controllers/restaurantController.js';
import { authorize } from '../middleware/caslMiddleware.js';

const router = express.Router();

// Create a new restaurant (admin only)
router.post('/', authorize, createRestaurant);

// Get all restaurants (public route)
router.get('/', getAllRestaurants);

// Get a single restaurant by ID (public route)
router.get('/:id', getRestaurantById);

// Update restaurant details (admin only)
router.put('/:id', authorize, updateRestaurant);

// Delete a restaurant (admin only)
router.delete('/:id', authorize, deleteRestaurant);

export default router;
