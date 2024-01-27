const bycrpt = require("bcryptjs")

const validateUserInput = (email, password) => {

    return (
        email && password
    )

}

const comparePassword = (password, hashedPassword) => {
    // return  bycrpt.compareSync(password,hashedPassword)
    if (password === hashedPassword) {
        return 'True';
    } else {
        return 'False';
    }
}

module.exports = {
    validateUserInput,
    comparePassword
}