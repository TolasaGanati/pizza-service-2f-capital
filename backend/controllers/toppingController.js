import prisma from "../utils/connect.js";

// Create a new topping
export const createTopping = async (req, res) => {
  const { name } = req.body;
  try {
    const topping = await prisma.topping.create({
      data: { name },
    });
    res.status(201).json({ message: "Topping created successfully", topping });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get all toppings
export const getAllToppings = async (req, res) => {
  try {
    const toppings = await prisma.topping.findMany();
    res.status(200).json(toppings);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get topping by ID
export const getToppingById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const topping = await prisma.topping.findUnique({ where: { id } });
    if (!topping) return res.status(404).json({ message: "Topping not found" });

    res.status(200).json(topping);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Update topping details
export const updateTopping = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  try {
    const topping = await prisma.topping.update({
      where: { id },
      data: { name },
    });
    res.status(200).json({ message: "Topping updated", topping });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Delete topping
export const deleteTopping = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.topping.delete({ where: { id } });
    res.status(200).json({ message: "Topping deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
