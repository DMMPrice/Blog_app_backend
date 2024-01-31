// Importing the Schema and model from the mongoose module
const { Schema, model } = require('mongoose');

// Defining the schema for stories using mongoose Schema
const StorySchema = new Schema({
    // Author of the story, referencing the "User" model
    author: {
        type: Schema.ObjectId,
        ref: "User", // Referencing the "User" model
        required: true
    },
    // Title of the story
    title: {
        type: String,
        required: [true, "Please provide a title"],
        unique: true, // Ensuring title uniqueness
        minlength: [4, "Please provide a title with at least 4 characters"],
    },
    // Content of the story
    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [10, "Please provide a content with at least 10 characters"],
    },
    // Image URL for the story, defaulting to a placeholder image
    image: {
        type: String,
        default: "/image/default.jpg"
    },
    // Estimated read time for the story in minutes
    readtime: {
        type: Number,
        default: 3
    },
    // Array of user references who liked the story
    likes: [{
        type: Schema.ObjectId,
        ref: "User" // Referencing the "User" model
    }],
    // Count of likes for the story
    likeCount: {
        type: Number,
        default: 0
    },
    // Array of comment references associated with the story
    comments: [{
        type: Schema.ObjectId,
        ref: "Comment" // Referencing the "Comment" model
    }],
    // Count of comments for the story
    commentCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true }); // Adding timestamps to track creation and update times

// Creating a Story model using the StorySchema
const Story = model("Story", StorySchema);

// Exporting the Story model for use in other parts of the application
module.exports = Story;
