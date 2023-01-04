const mongoose = require('mongoose')

// schema
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    LikeTotal: Number,
    Post: String,
    Image: String
}, {timespan: true})

const User = mongoose.model("User", UserSchema)

module.exports = User