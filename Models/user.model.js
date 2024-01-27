const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true ,"Please provide a username"],
    },
    email: {
        type: String,
        required: [true ,"Please provide a email"],
        unique: true,
        match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
      type:String,
      minlength: [6, "Please provide a password with min length : 6 "],
      required: [true, "Please provide a password"],
      select: false,
    },
    profileImageURL: {
        type: String,
        default: "/image/user_default.png",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
    readList: [{
        type: Schema.ObjectId,
        ref: "Story"
    }],
    readListLength: {
        type: Number,
        default: 0
    }
}, {timestamps: true});


const User = model("User", userSchema);

module.exports = User;