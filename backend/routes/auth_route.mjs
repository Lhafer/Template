import express from "express";

const auth_router = express.Router();

// Example route for user login
auth_router.post("/login", (req, res) => {
  // Handle login logic here
  res.send("Login route");
});

// Example route for user registration
auth_router.post("/register", (req, res) => {
  // Handle registration logic here
  res.send("Register route");
});

export default auth_router;
