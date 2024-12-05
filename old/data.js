const express = require("express");
const app = express();
const port = 3200;

app.get("/", (req, res) => {
   // fetch and display data from MOCK_DATA.json
   const data = require("./MOCK_DATA.json");
   res.json(data);
});

app.listen(port, (error) => {
   if (!error) {
      console.log("server is successfully running and app is listening on port" + port);
   } else {
      console.log("Error occured server cant start", error);
   }
});

