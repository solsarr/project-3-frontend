const mongoose = require('mongoose')
const Post = require('./Post')
const Comment = require('./Comment')

// schema
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    LikeTotal: Number,
    Post: String,
    Image: String
}, {timespan: true})

const User = mongoose.model("User", UserSchema)

module.exports = User