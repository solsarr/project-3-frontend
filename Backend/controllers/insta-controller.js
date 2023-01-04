const express = require('express')
const router = express.Router()

const {Profile} = require('../models')
console.log(Profile)
// Routes
router.get('/', (req,res)=>{
    res.status(200).json({message: "insta index route"})
})

router.post('/', (req,res)=>{
    res.status(200).json({message: "insta create/post route"})
})

module.exports = router