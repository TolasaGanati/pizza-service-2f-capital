import prisma from "../utils/connect.js";

// Create a role
export const createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const role = await prisma.role.create({ data: { name } });
    res.status(201).json({ message: "Role created successfully", role });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get all roles
export const getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Assign a role to a user
export const assignRole = async (req, res) => {
  const { userId, roleId } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { roleId },
    });
    res.status(200).json({ message: "Role assigned successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
