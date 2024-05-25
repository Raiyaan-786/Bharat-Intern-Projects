const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const port = process.env.PORT || 3000 ;

mongoose.connect(process.env.MONGO_URL);

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const Registration = new mongoose.model("Registration", registrationSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/' , (req,res) => {
    res.sendFile(__dirname + "/pages/index.html");
})

app.post('/register', async (req,res) => {
    try{
        const { name , email , password } = req.body;
        const existingUser = await Registration.findOne({email : email}) ;
        if(!existingUser) {
            const registrationData = new Registration({
                name: name,
                email: email,
                password: password
            });
            await registrationData.save();
            res.redirect("/success");
        }
        else{
            console.log("User already exist");
            res.redirect("/error");
        }
    }
    catch(error){
        console.log(error);
        res.redirect("/error");
    }
})
app.get('/success' , (req,res) => {
    res.sendFile(__dirname + "/pages/success.html");
})
app.get('/error' , (req,res) => {
    res.sendFile(__dirname + "/pages/error.html");
})
app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})