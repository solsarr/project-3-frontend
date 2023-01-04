// import express
const express = require('express');
const app = express();

// controller import
const instaController = require('./controllers/insta-controller')

require("dotenv").config()
require('./config/db.connection')

const { PORT } = process.env
// const PORT = 4000;

// router middleware
app.use('/insta', instaController)

// root router
app.get('/', (req,res) => res.redirect('/insta'))

app.listen(PORT, () => console.log(`Listening for client requests on port: ${PORT}`));