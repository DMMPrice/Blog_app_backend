// Importing the bcryptjs module for password hashing and comparison
const bcrypt = require("bcryptjs");

// Function to validate user input (email and password)
const validateUserInput = (email, password) => {
    // Returns true if both email and password are provided, otherwise false
    return (
        email && password
    );
}

// Function to compare the provided password with the hashed password
const comparePassword = (password, hashedPassword) => {
    // Using bcrypt.compareSync to securely compare the passwords
    // Uncomment the line below and comment the if-else block for bcrypt comparison
    // return bcrypt.compareSync(password, hashedPassword);

    // Using a simple equality check for demonstration purposes
    // In a real-world scenario, bcrypt.compareSync should be used
    if (password === hashedPassword) {
        return 'True';  // Passwords match
    } else {
        return 'False'; // Passwords do not match
    }
}

// Exporting the validateUserInput and comparePassword functions for use in other parts of the application
module.exports = {
    validateUserInput,
    comparePassword
};
