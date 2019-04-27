const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./keys');

// initialize express
const app = express();
// configure express
app.use(express.json());

//connect mongo db
mongoose.connect('mongodb+srv://frank:<Thisispassword>@cluster0-kxwcz.mongodb.net/test?retryWrites=true', {
    useNewUrlParser:true,
    useCreateIndex: true
});
// setup port 
const port = process.env.PORT || 5000;