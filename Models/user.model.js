// Importing the Schema and model from the mongoose module
const { Schema, model } = require('mongoose');

// Defining the schema for users using mongoose Schema
const userSchema = new Schema({
    // Full name of the user
    fullName: {
        type: String,
        required: [true, "Please provide a username"],
    },
    // Email of the user, ensuring uniqueness and following a valid email format
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    // Password of the user with minimum length requirement, not selected in query results
    password: {
        type: String,
        minlength: [6, "Please provide a password with a minimum length of 6"],
        required: [true, "Please provide a password"],
        select: false, // Password not selected by default in query results
    },
    // URL for the user's profile image, defaulting to a placeholder image
    profileImageURL: {
        type: String,
        default: "/image/user_default.png",
    },
    // Role of the user, with default value as "USER" and limited to "USER" or "ADMIN"
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
    // Array of story references in the user's read list
    readList: [{
        type: Schema.ObjectId,
        ref: "Story" // Referencing the "Story" model
    }],
    // Count of stories in the user's read list
    readListLength: {
        type: Number,
        default: 0
    }
}, { timestamps: true }); // Adding timestamps to track creation and update times

// Creating a User model using the userSchema
const User = model("User", userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
