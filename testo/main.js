const express = require("express");
const env = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();
env.config();

let port = process.env.port || 6000;
app.listen(port, () => {
  console.log("app is listening at port:", port);
});

app.post("/generatekey", (req, res) => {
  let jwtkey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    id: 12,
  };
  let token = jwt.sign(data, jwtkey);
  res.send(token);
});

app.get("/validateToken", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header(tokenHeaderKey);
    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.json({
        message: "Successfully Verified",
        data: { time: verified.time, id: verified.id },
      });
    } else {
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
});

// curl commands:
// curl -X GET http://localhost:6000/validateToken -H "my_token_header: <your_token_here>"
// curl -X POST http://localhost:6000/generatekey
