import prisma from "../utils/connect.js";

// Create a new pizza
export const createPizza = async (req, res) => {
  const { name, price, restaurantId } = req.body;
  try {
    const pizza = await prisma.pizza.create({
      data: { name, price, restaurantId },
    });
    res.status(201).json({ message: "Pizza created successfully", pizza });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get all pizzas
export const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await prisma.pizza.findMany();
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get pizza by ID
export const getPizzaById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const pizza = await prisma.pizza.findUnique({ where: { id } });
    if (!pizza) return res.status(404).json({ message: "Pizza not found" });

    res.status(200).json(pizza);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Update pizza details
export const updatePizza = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  try {
    const pizza = await prisma.pizza.update({
      where: { id },
      data: { name, price },
    });
    res.status(200).json({ message: "Pizza updated", pizza });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Delete pizza
export const deletePizza = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.pizza.delete({ where: { id } });
    res.status(200).json({ message: "Pizza deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
