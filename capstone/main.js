const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/shoppingstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error);

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  productTitle: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productDesc: { type: String, required: true },
});

productSchema.pre("save", async function (next) {
  const count = await mongoose.models.Product.countDocuments();
  this.productId = `P${count + 1}`;
  next();
});

const Product = mongoose.model("Product", productSchema);

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(
      {},
      { _id: 0, productTitle: 1, productPrice: 1, productDesc: 1 }
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/products/search", async (req, res) => {
  try {
    const product = await Product.findOne(
      { productTitle },
      { _id: 0, productTitle: 1, productPrice: 1, productDesc: 1 }
    );
    if (product) res.status(200).json(product);
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/products/:productId", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { productId: req.params.productId },
      { productPrice: req.body.productPrice },
      { new: true, fields: "productId productTitle productPrice" }
    );
    if (product)
      res.status(200).json({ message: "Price updated successfully", product });
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/products/:productId", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      productId: req.params.productId,
    });
    if (product)
      res.status(200).json({ message: "Product removed successfully" });
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
