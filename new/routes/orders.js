const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Middleware to check if user is logged in
const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'You must be logged in to access this resource' });
  }
  next();
};

// Place an Order
router.post('/', isAuthenticated, async (req, res) => {
  const { items } = req.body;
  if (!items || items.length === 0) return res.status(400).json({ error: 'Order must have at least one item' });

  try {
    const newOrder = new Order({ userId: req.session.userId, items });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// Get User's Orders
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.session.userId });
    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
