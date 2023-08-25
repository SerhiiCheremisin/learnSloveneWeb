const express = require('express');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
const ws = require('ws');
const mongoose = require('mongoose');
const userModel = require('./models');
require('dotenv').config();

const app = express();
const router = express.Router()

const mongoURL = `${process.env.API_URL_WITH_KEY}`;
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
  };


mongoose.set('strictQuery', false)
const mongoConnnector = async () => {
    await mongoose.connect(mongoURL, 
        {useNewUrlParser: true } )
};

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(3300, () => {
    console.log("back listener has connected")
    mongoConnnector()
    .then( () => {
        console.log("mangose is connected")
    })
    .catch( error => {
        console.log( `We have a problem connecting to mongo, ${error}`)
    })
})

app.post("/add-user", cors(corsOptions), async function (req, res) {
     const user = req.body;
     await userModel.insertMany([user])
     res.send(req.body)
} )

app.get("/find-all-users", async function(req, res){
   await userModel.find().then( (users) => {
      res.send(users)
   })
})

app.post("/add-new-word", async function (req, res) {
  await userModel.findOneAndUpdate({userName: req.body.userName} , {userDictionary: req.body.arrayToDB}).then( (data) => {
    res.send(data)
  })
})

app.get("/find-one-user/:name", async function (req, res) {
    await userModel.findOne({userName: req.params.name}).then( (user) => {
        res.send(user)
    })
})


