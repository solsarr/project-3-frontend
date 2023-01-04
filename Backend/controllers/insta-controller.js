const express = require('express')
const router = express.Router()

// Routes
router.get('/', (req,res)=>{
    res.status(200).json({message: "insta index route"})
})

router.post('/', (req,res)=>{
    res.status(200).json({message: "insta create/post route"})
})

module.exports = router