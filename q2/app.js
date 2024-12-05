const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.use(express.json());

async function connectToDatabase() {
  await client.connect();
  const database = client.db("shoppersonline");
  return database.collection("products");
}

app.get("/products", async (req, res) => {
  try {
    const products = await connectToDatabase();
    const allProducts = await products.find({}).toArray();
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

app.get("/mobiles", async (req, res) => {
  try {
    const products = await connectToDatabase();
    const mobiles = await products.find({ category: "Mobiles" }).toArray();
    res.json(mobiles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching mobiles");
  }
});


app.get("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const products = await connectToDatabase();
    const product = await products.findOne({ productId: productId });
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching product");
  }
});

app.get("/laptop-names", async (req, res) => {
  try {
    const products = await connectToDatabase();
    const laptops = await products
      .find({ category: "Laptops" })
      .project({ name: 1 })
      .toArray();
    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching laptop names");
  }
});

app.get("/home-and-furniture", async (req, res) => {
  try {
    const products = await connectToDatabase();
    const homeAndFurniture = await products
      .find({ category: "Home and Furniture" })
      .toArray();
    res.json(homeAndFurniture);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching home and furniture items");
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
