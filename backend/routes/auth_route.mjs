import express from "express";
import { auth } from "../firebase.mjs";
import { signInWithEmailAndPassword } from "firebase/auth";
const auth_router = express.Router();

// Example route for user login
auth_router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.send(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error code:", errorCode);
      console.log("Error message:", errorMessage);
    });
});

// Example route for user registration
auth_router.post("/register", (req, res) => {
  // Handle registration logic here
  res.send("Register route");
});

export default auth_router;
