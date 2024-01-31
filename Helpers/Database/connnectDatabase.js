// Importing the Mongoose module for MongoDB interactions
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();


// MongoDB's connection URI with authentication credentials
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sdihrlj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Async function to connect to the MongoDB database
const connectDatabase = async () => {
    // Using Mongoose to connect to the specified MongoDB URI
    await mongoose.connect(MONGO_URI, {}).then(() => {
        // Log a message when the connection is successful
        console.log('DB Connected');
    }).catch((err) => {
        // Log an error message if the connection fails
        console.log(err);
    });
}

// Exporting the connectDatabase function for use in other parts of the application
module.exports = connectDatabase;
