const path = require("path");
const express = require("express");
const multer = require("multer");
const fs = require("fs");

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

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir("uploads", (err, files) => {
    if (err) {
      console.error("Unable to read directory:", err);
      return res.send("Error reading files.");
    }
    res.render("homepage", { files });
  });
});

app.post("/uploads", upload.single("profileimage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect("/");
});

app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("File not found.");
    }

    res.download(filePath, filename, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
        res.status(500).send("Error downloading file.");
      }
    });
  });
});

app.listen(port, () =>
  console.log(`Server running @ http://localhost:${port}`)
);
