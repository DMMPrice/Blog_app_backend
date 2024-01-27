const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
    story: {
        type: Schema.ObjectId,
        required: true,
        ref: "Story"
    },
    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [3, " Please provide a content least 3 characters"]
    },
    author: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    likes: [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    star: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

const Comment = model("Comment", commentSchema);

module.exports = Comment;

