import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../utils/connect.js";
import { loginSchema, registerSchema } from "../utils/validationSchema.js";
import { z } from "zod";


// Registration function
export const register = async (req, res) => {
  try {
    // Validate the incoming data
    const validatedData = registerSchema.parse(req.body);
    const { username, email, password, role } = validatedData;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) return res.status(400).json({ message: "User already exists!" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save to the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        role,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid requested data" });
    }
    res.status(500).json({ message: err });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    // Validate the incoming data
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(400).json({ message: "User does not exist!" });

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Password incorrect!" });

    // Generate cookie token and send to the user
    const age = 1000 * 60 * 60 * 24 * 7; // 1 week

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
  .cookie("token", token, {
    httpOnly: true,
    secure: false, // Disable secure in development as you're not using HTTPS
    sameSite: 'Lax', // Use Lax in development to avoid cross-site issues
    maxAge: age,
  })

  .status(200)
  .json({ role: user.role, ...userInfo });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid requested data" });
    }
    res.status(500).json({ message: err });
  }
};
/////////////change specific part the above for production to

  // res
  //     .cookie("token", token, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === 'production',
  //       sameSite: 'None',
  //       maxAge: age,
  //     })
  //     .status(200)
  //     .json({ role: role.name, ...userInfo });

// Logout function
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
