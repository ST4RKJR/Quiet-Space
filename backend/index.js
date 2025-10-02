const express = require("express");
const { PrismaClient } = require("./generated/prisma");
const cors = require("cors");
const bodyParser = require("body-parser");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: { email, password }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "User already exists or invalid data" });
  }
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
