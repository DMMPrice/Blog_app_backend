// Importing the Schema and model from the mongoose module
const { Schema, model } = require('mongoose');

// Defining the schema for comments using mongoose Schema
const commentSchema = new Schema({
    // Reference to the related story for the comment
    story: {
        type: Schema.ObjectId,
        required: true,
        ref: "Story" // Referencing the "Story" model
    },
    // Content of the comment
    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [3, "Please provide a content with at least 3 characters"]
    },
    // Author of the comment, referencing the "User" model
    author: {
        type: Schema.ObjectId,
        ref: "User", // Referencing the "User" model
        required: true
    },
    // Array of user references who liked the comment
    likes: [{
        type: Schema.ObjectId,
        ref: "User" // Referencing the "User" model
    }],
    // Count of likes for the comment
    likeCount: {
        type: Number,
        default: 0
    },
    // Star rating for the comment
    star: {
        type: Number,
        default: 0
    }
}, { timestamps: true }); // Adding timestamps to track creation and update times

// Creating a Comment model using the commentSchema
const Comment = model("Comment", commentSchema);

// Exporting the Comment model for use in other parts of the application
module.exports = Comment;
