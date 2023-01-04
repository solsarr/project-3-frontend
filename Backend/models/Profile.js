const mongoose = require('mongoose')

// schema
const ProfileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    LikeTotal: Number,
    Post: String,
    Image: String
}, {timespan: true})

const Profile = mongoose.model("Profile", ProfileSchema)

module.exports = Profile