const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/RegistrationRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

console.log("Auth routes type:", typeof authRoutes);
console.log("Event routes type:", typeof eventRoutes);
console.log("Registration:", typeof registrationRoutes);

// AUTH
app.use("/api/auth", authRoutes);

// EVENTS
app.use("/api/events", eventRoutes);
app.use("/api/registration",registrationRoutes);

app.get("/", (req, res) => {
  res.send("NGO Volunteer Portal Backend is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});