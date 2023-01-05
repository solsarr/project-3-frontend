const mongoose = require('mongoose')
const User = require('./User')

const PostSchema = new mongoose.Schema({
    image: { 
        type: String,
        required: true
    },
    like: Number,
    comment: {
        type: String,
        required : true,
        max: 300
    },
    caption: {
        type: String,
        max : 250
    }
}, {timestamps: true})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post