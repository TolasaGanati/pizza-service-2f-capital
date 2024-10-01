import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../utils/connect.js";
import { loginSchema, registerSchema } from "../utils/validationSchema.js";
import { z } from "zod";

// Register a new user
export const register = async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const { email, password, role, username } = validatedData;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    //const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        phone,
        password,
        role
      },
    });

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid data", errors: err.errors });
    }
    res.status(500).json({ message: "Server error", error: err });
  }
};






// Login user
export const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get user profile
export const getProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Update user profile
export const updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { username, email, password } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { username, email, password },
    });

    res.status(200).json({ message: "Profile updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await prisma.user.delete({ where: { id: userId } });
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
