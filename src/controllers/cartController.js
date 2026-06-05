import prisma from '../db.js';

// Get user's cart items
export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: true // Include product details
      },
      orderBy: { createdAt: 'asc' }
    });

    return res.json(cartItems);
  } catch (error) {
    console.error("Get Cart Error:", error);
    return res.status(500).json({ message: "Server error fetching cart", error: error.message });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if product has enough stock
    if (product.stock < quantity) {
      return res.status(400).json({ message: `Only ${product.stock} items left in stock` });
    }

    // Upsert cart item (increment quantity if already exists)
    const cartItem = await prisma.cartItem.upsert({
      where: {
        userId_productId: {
          userId,
          productId
        }
      },
      update: {
        quantity: {
          increment: quantity
        }
      },
      create: {
        userId,
        productId,
        quantity
      },
      include: {
        product: true
      }
    });

    return res.status(201).json(cartItem);
  } catch (error) {
    console.error("Add to Cart Error:", error);
    return res.status(500).json({ message: "Server error adding to cart", error: error.message });
  }
};

// Update cart item quantity
export const updateCartItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined || quantity < 1) {
      return res.status(400).json({ message: "Quantity must be at least 1" });
    }

    // Find the cart item
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId
        }
      },
      include: {
        product: true
      }
    });

    if (!existingItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Verify stock
    if (existingItem.product.stock < quantity) {
      return res.status(400).json({ message: `Only ${existingItem.product.stock} items left in stock` });
    }

    // Update quantity
    const updatedItem = await prisma.cartItem.update({
      where: {
        userId_productId: {
          userId,
          productId
        }
      },
      data: { quantity },
      include: {
        product: true
      }
    });

    return res.json(updatedItem);
  } catch (error) {
    console.error("Update Cart Error:", error);
    return res.status(500).json({ message: "Server error updating cart item", error: error.message });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const cartItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId
        }
      }
    });

    if (!cartItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    await prisma.cartItem.delete({
      where: {
        userId_productId: {
          userId,
          productId
        }
      }
    });

    return res.json({ message: "Item removed from cart successfully", productId });
  } catch (error) {
    console.error("Remove From Cart Error:", error);
    return res.status(500).json({ message: "Server error removing cart item", error: error.message });
  }
};

// Clear all items in cart
export const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    await prisma.cartItem.deleteMany({
      where: { userId }
    });

    return res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Clear Cart Error:", error);
    return res.status(500).json({ message: "Server error clearing cart", error: error.message });
  }
};
