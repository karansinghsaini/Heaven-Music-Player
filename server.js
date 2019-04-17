const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/api');
const app = express();

const API_PORT = 3000;


mongoose.connect('mongodb://localhost/HeavenPlayer', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//bodyParser parses the request bost to be a readable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//for routes
app.use("/api",router);

//error control
app.use(function(err,req,res,next){
    res.status(422).send({error: err._message});
});

app.listen(API_PORT, () => console.log('Listening to port'));