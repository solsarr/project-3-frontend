// import express
const express = require('express');
const app = express();

require("dotenv").config()
require('./config/db.connection')

const { PORT } = process.env
// const PORT = 4000;

app.listen(PORT, () => console.log(`Listening for client requests on port: ${PORT}`));