const express = require("express");
const app = express();
let users = require("./MOCK_DATA.json");
app.use(express.json());

app.get("/", (req, res) => {
   const data = require("./MOCK_DATA.json");
   res.json(data);
});

app.route("/users/:id")
  .patch((req, res) => {
    const user = users.find(u => u.id === +req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { first_name, last_name, email, gender, ip_address } = req.body;
    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (email) user.email = email;
    if (gender) user.gender = gender;
    if (ip_address) user.ip_address = ip_address;

    res.json({ message: "User updated", user });
  })

  .delete((req, res) => {
    const index = users.findIndex(u => u.id === +req.params.id);
    if (index === -1) return res.status(404).json({ message: "User not found" });

    users.splice(index, 1);
    res.json({ message: "User deleted" });
  });

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


// Path : PATCH /users/100
// Method : PATCH
// Body :
// Content-Type: application/json
// {
//   "first_name": "Kaela-Marie",
//   "email": "kaela_new@example.com"
// }

// Delete
// Path : DELETE /users/100
// Method : DELETE