const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// newUser data
const newUser = {
  email: "abc@gmail.com",
  password: "12345",
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === newUser.email && password === newUser.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
