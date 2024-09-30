import express from 'express';
import { createPizza, getAllPizzas, getPizzaById, updatePizza, deletePizza } from '../controllers/pizzaController.js';
import { authorize } from '../middleware/caslMiddleware.js';

const router = express.Router();

// Create a new pizza (admin only)
router.post('/', authorize, createPizza);

// Get all pizzas (public route)
router.get('/', getAllPizzas);

// Get pizza by ID (public route)
router.get('/:id', getPizzaById);

// Update pizza details (admin only)
router.put('/:id', authorize, updatePizza);

// Delete pizza (admin only)
router.delete('/:id', authorize, deletePizza);

export default router;
