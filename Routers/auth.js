// Importing the Express module
const express = require("express");

// Importing the registration and login functions from the auth controller
const { register, login } = require("../Controllers/auth");

// Creating a router instance using Express
const router = express.Router();

// Defining a route for user registration using the register function
router.post("/register", register);

// Defining a route for user login using the login function
router.get("/login", login);

// Exporting the router for use in other parts of the application
module.exports = router;
