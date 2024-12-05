const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add Product
router.post('/add', async (req, res) => {
  const { productTitle, productPrice, productDesc } = req.body;

  try {
    const newProduct = new Product({ productTitle, productPrice, productDesc });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Display All Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({}, { _id: 0, productTitle: 1, productPrice: 1, productDesc: 1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Search by Product Name
router.get('/search', async (req, res) => {
  const { productTitle } = req.query;

  try {
    const product = await Product.findOne({ productTitle }, { _id: 0, productTitle: 1, productPrice: 1, productDesc: 1 });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to search product' });
  }
});

// Update Product Price
router.put('/update-price/:id', async (req, res) => {
  const { id } = req.params;
  const { productPrice } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { productPrice },
      { new: true, projection: { _id: 0, productTitle: 1, productPrice: 1 } }
    );
    if (updatedProduct) {
      res.status(200).json({ message: 'Price updated successfully', updatedProduct });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update price' });
  }
});

// Remove Product
router.delete('/remove/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      res.status(200).json({ message: 'Product removed successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove product' });
  }
});

module.exports = router;
