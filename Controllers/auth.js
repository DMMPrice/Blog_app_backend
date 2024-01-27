const asyncErrorWrapper = require("express-async-handler");
const {validateUserInput, comparePassword} = require("../Helpers/input/inputHelpers");
const User = require("../Models/user.model");


const register = asyncErrorWrapper(async (req, res, next) => {
    const {fullName, email, password} = req.body;
    try {
        // Check if the user with the same email already exists
        const existingUser = await User.findOne({email});

        if (existingUser) {
            console.log("Same ID");
            return res.status(400).send("Same ID");
        }
        const newUser = await User.create({
            fullName,
            email,
            password
        });
        res.status(201).send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
});

const login = asyncErrorWrapper(async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).select("+password")
        if (!user) {
            console.log("Not Found");
            res.status(400).send("Not Found")
        }

        if (!comparePassword(password, user.password)) {
            console.log("Wrong Password");
            res.status(404).send("Wrong Password")
        }
        console.log("User Found");
        res.status(201).send(`User Found: ${user}`);
    } catch
        (error) {
        console.error(error);
        res.status(404).send("Internal Server Error")
    }
});

// const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
//     const {email, password} = req.body;
//     await User.findOneAndUpdate(
//         {email: email}, // Find user by username
//         {
//             password: password,
//         },
//         {
//             new: true,
//             runValidators: true
//         }
//     );
// });

module.exports = {
    register, login
}