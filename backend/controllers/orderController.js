import { defineAbilityFor } from "../casl/createAbility.js";
import { findBy } from "../casl/findUser.js";
import prisma from "../utils/connect.js";
import { z } from "zod";

export const getOrders = async (req, res) => {
    const currentUser = req.user;

    try {
        const user = await findBy({ id: currentUser.id });
        const ability = defineAbilityFor(user.permissions);

        const isAllowed = ability.can("View", 'User');

        if (!isAllowed) {
            return res.status(403).json({ message: "Forbidden: You do not have permission to get Orders list." });
        }

        const role = await prisma.role.findUnique({
            where: {
                name: "order"
            }
        });

        const ordersList = await prisma.order.findMany({
            where: {
                userId: currentUser.id // Assuming you're getting orders for the current user
            },
        });

        res.status(200).json({ data: ordersList });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const orderStatus = async (req, res) => {
    const currentUser = req.user;

    const id = parseInt(req.params.id);
    const { status } = req.body;

    try {
        const foundOrder = await prisma.order.findUnique({
            where: { id },
        });

        if (!foundOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        const user = await findBy({ id: currentUser.id });
        const ability = defineAbilityFor(user.permissions);

        const isAllowed = ability.can("Edit", 'User');

        if (!isAllowed) {
            return res.status(403).json({ message: "You do not have permission to change order status." });
        }

        const updatedOrder = await prisma.order.update({
            where: { id },
            data: { status },
        });

        res.status(201).json({ message: `Order status updated to ${status} successfully` });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ message: "Invalid request data", errors: err.errors });
        }
        res.status(500).json({ message: "Failed to update order status" });
    }
};

export const deleteOrder = async (req, res) => {
    const id = parseInt(req.params.id);
    const currentUser = req.user;

    const user = await findBy({ id: currentUser.id });
    const ability = createAbility(user.permissions);

    const isAllowed = ability.can("Delete", 'User');

    if (!isAllowed) {
        return res.status(403).json({ message: "You do not have permission to delete this order." });
    }

    try {
        const order = await prisma.order.findUnique({
            where: { id },
        });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        await prisma.order.delete({
            where: { id },
        });

        res.status(200).json({ message: "Order deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete order" });
    }
};
