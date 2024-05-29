const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/MoneyTracker");
const db = mongoose.connection
db.on("error", ()=> console.log("Error in connecting to the Database"))
db.on("open", ()=> console.log("Connected to Database"));

const port = process.env.PORT || 3000 ;

app.post("/add",(req,res) => {
    const category_select  = req.body.category_select
    const input_amount  = req.body.input_amount
    const info  = req.body.info
    const input_date  = req.body.input_date

    const data = {
        "Category" : category_select,
        "Amount": input_amount,
        "Info": info,
        "Date": input_date
    }
    db.collection("users").insertOne(data, (err,collection) => {
        if(err){
            throw err ;
        }
        console.log("Record inserted successfully");
    })
})

app.get("/" ,(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html')
}).listen(port)

console.log("Listening on port 3000");
