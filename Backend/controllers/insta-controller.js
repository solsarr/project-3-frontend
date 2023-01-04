const express = require('express')
const router = express.Router()

const {Profile} = require('../models')
// console.log(Profile)
// Routes
// INDEX route
router.get('/', (req,res)=>{
    res.status(200).json({message: "insta index route"})
})
// Create route
router.post('/', (req,res)=>{
    // console.log('post route', req.body)
    res.status(200).json({message: "insta create/post route"})
})

// SHOW/GET route
router.get('/:id', (req,res)=>{
    res.status(200).json({message: "insta show/get route"})
})
// DELETE route
router.delete('/:id', (req,res)=>{
    res.status(200).json({message: "insta delete/destory route"})
})
// UPDATE/PUT route
router.put('/:id', (req,res)=>{
    res.status(200).json({message: "insta updatte/put route"})
})

module.exports = router