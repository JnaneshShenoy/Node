const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productTitle: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productDesc: { type: String, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
