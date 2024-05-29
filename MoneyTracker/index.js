const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection
db.on("error", ()=> console.log("Error in connecting to the Database"))
db.onjce("open", ()=> console.log("Connected to Database"));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})
