const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const port = 9011;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/uploads", upload.single("profileimage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
