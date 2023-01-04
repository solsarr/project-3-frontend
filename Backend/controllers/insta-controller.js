const express = require('express')
const router = express.Router()

const {User} = require('../models')

const db = require('../models')
console.log(User)
// Routes
// INDEX route
router.get('/', async (req,res)=>{
    // res.status(200).json({message: "insta index route"})
    try{
        const allUser = await User.find({})
        res.status(200).json(allUser)
    } catch(err){
        res.status(400).json({error: err})
    }
})
// Create route
router.post('/', async (req,res)=>{
    console.log('post route', req.body)
    try{
        const newPost= await User.create(req.body)
        res.status(201).json(newPost)

    } catch(err){
        res.status(400).json({error:err})
    }
    // res.status(200).json({message: "insta create/post route"})
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