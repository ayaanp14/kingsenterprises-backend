import prisma from '../db.js';

// Get all products (supports category filtering, searches, price range, and sorting)
export const getProducts = async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice, sortBy } = req.query;

    const where = {};

    if (category) {
      const categoryList = category.split(',');
      if (categoryList.length > 1) {
        where.category = { in: categoryList };
      } else {
        where.category = category;
      }
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Price Range Filter
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) {
        where.price.gte = parseFloat(minPrice);
      }
      if (maxPrice) {
        where.price.lte = parseFloat(maxPrice);
      }
    }

    // Sorting logic
    let orderBy = { createdAt: 'desc' }; // default: newest first
    if (sortBy) {
      if (sortBy === 'price_asc') {
        orderBy = { price: 'asc' };
      } else if (sortBy === 'price_desc') {
        orderBy = { price: 'desc' };
      } else if (sortBy === 'name_asc') {
        orderBy = { name: 'asc' };
      } else if (sortBy === 'name_desc') {
        orderBy = { name: 'desc' };
      }
    }

    const products = await prisma.product.findMany({
      where,
      orderBy
    });

    return res.json(products);
  } catch (error) {
    console.error("Get Products Error:", error);
    return res.status(500).json({ message: "Server error fetching products", error: error.message });
  }
};

// Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id }
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    return res.status(500).json({ message: "Server error fetching product", error: error.message });
  }
};

// Create new product (Admin only)
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category, stock } = req.body;

    if (!name || !description || price === undefined || !imageUrl || !category) {
      return res.status(400).json({ message: "All product fields (name, description, price, imageUrl, category) are required" });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
        category,
        stock: stock !== undefined ? parseInt(stock) : 10
      }
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error("Create Product Error:", error);
    return res.status(500).json({ message: "Server error creating product", error: error.message });
  }
};

// Update existing product (Admin only)
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, imageUrl, category, stock } = req.body;

    const existingProduct = await prisma.product.findUnique({
      where: { id }
    });

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = await prisma.product.update({
      where: { id },
      data: {
        name: name !== undefined ? name : existingProduct.name,
        description: description !== undefined ? description : existingProduct.description,
        price: price !== undefined ? parseFloat(price) : existingProduct.price,
        imageUrl: imageUrl !== undefined ? imageUrl : existingProduct.imageUrl,
        category: category !== undefined ? category : existingProduct.category,
        stock: stock !== undefined ? parseInt(stock) : existingProduct.stock
      }
    });

    return res.json(product);
  } catch (error) {
    console.error("Update Product Error:", error);
    return res.status(500).json({ message: "Server error updating product", error: error.message });
  }
};

// Delete product (Admin only)
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const existingProduct = await prisma.product.findUnique({
      where: { id }
    });

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    await prisma.product.delete({
      where: { id }
    });

    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    return res.status(500).json({ message: "Server error deleting product", error: error.message });
  }
};
