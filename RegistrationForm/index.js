const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express(); 

dotenv.config();

const port = process.env.PORT || 3000 ;

app.get('/' , (req,res) => {
    res.sendFile(__dirname + "/pages/index.html");
})

app.post('/register' , (req,res) => {
    try{
        const { name,email,password } = req.body;
        
    }
    catch(error){
        
    }
})

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})