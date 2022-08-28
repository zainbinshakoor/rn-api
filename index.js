const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const UserModel = require("./model/Users");

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.ghl851x.mongodb.net/?retryWrites=true&w=majority")

app.get("/",(req,res)=> {
    return res.send("server is working")
})

app.post("/createUser", (req, res) => {
    try {
        const user = req.body;
        const newUser = new UserModel(user);
        res.json(user)
        console.log(user)
    } catch (error) {
        console.log("error", error);
        res.json(error)
    }
  

  
})



const port = 8000;


app.listen(port, () => {
    console.log("Hello Server Is Running on port", port)
})