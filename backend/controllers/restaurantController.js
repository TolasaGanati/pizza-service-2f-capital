import prisma from "../utils/connect.js";

// Create a new restaurant
export const createRestaurant = async (req, res) => {
  const { name, location } = req.body;
  try {
    const restaurant = await prisma.restaurant.create({
      data: { name, location },
    });
    res.status(201).json({ message: "Restaurant created successfully", restaurant });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get all restaurants
export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get restaurant by ID
export const getRestaurantById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const restaurant = await prisma.restaurant.findUnique({ where: { id } });
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });

    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Update restaurant details
export const updateRestaurant = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, location } = req.body;
  try {
    const restaurant = await prisma.restaurant.update({
      where: { id },
      data: { name, location },
    });
    res.status(200).json({ message: "Restaurant updated", restaurant });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.restaurant.delete({ where: { id } });
    res.status(200).json({ message: "Restaurant deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
