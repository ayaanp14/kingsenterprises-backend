import prisma from '../db.js';

// Get all users and their carts
export const getUsersAndCarts = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        cartItems: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users and carts:", error);
    res.status(500).json({ message: "Failed to fetch users and carts data." });
  }
};
