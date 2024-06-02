const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.get('/' , (req,res) => {
    res.send("Welcome to Project");
})
app.listen(3000);