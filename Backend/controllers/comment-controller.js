const express = require('express')
const router = express.Router()

const {User} = require('../models')
const {Post} = require('../models')

// Json body
router.use(express.json())

const db = require('../models')
console.log(Post)
// Routes
// INDEX route
router.get("/", (req, res) => {
	res.status(200).json({message: "comment index route"})
});

// CREATE ROUTE
router.post("/",  (req, res) =>  {
	console.log(req.body)
	res.status(200).json({message: "comment create route"})
});

// SHOW ROUTE
router.get("/:id",  (req, res) => {
	res.status(200).json({message: "comment show route" })
});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "comment delete route" })
});

// UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
    res.status(200).json({message: "comment index route"})
});

module.exports = router