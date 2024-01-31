// Importing necessary modules
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");

// Importing custom route module
const IndexRoute = require("./Routers/index");

// Importing database connection helper function
const connectDatabase = require("./Helpers/Database/connnectDatabase");

// Loading environment variables from a specified path
dotenv.config({
    path:  '../Backend/.env'
});

// Creating an instance of Express
const app = express();
// Connecting to the database
connectDatabase();

// Middleware to parse incoming JSON data
app.use(express.json());
// Middleware to handle Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Handling root route
app.get("/", (req, res) => {
    console.log("Server is working");
    // Sending a response for the root route
    res.status(201).send("Server is connected");
});

// Using the custom route module for routes starting with "/"
app.use("/", IndexRoute);

// Defining the port for the server, using the specified port or defaulting to 5000
const PORT = process.env.PORT || 5000;
// Starting the server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
