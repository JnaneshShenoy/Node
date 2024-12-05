const express = require("express");
const app = express();

const port = 6001;
app.use(express.json());

app.post("/", (req, res) => {
    const { name } = req.body;

    res.send(`Welcome ${name}`);
});

app.listen(port, (error) => {
    if (!error) {
        console.log("server is successfully running and app is listening on port" + port);
    } else {
        console.log("Error occured server cant start", error);
    }
});

// const express = require("express");
// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to root URL of server");
// });

// app.listen(port, (error) => {
//   if (!error) {
//     console.log(
//       "server is successfully running and app is listening on port " + port
//     );
//   } else {
//     console.log("Error occured server cant start", error);
//   }
// });

// const express = require("express");
// const app = express();
// const port = 3456;
// app.listen(port, () => {
//   console.log("server is running !!");
// });
