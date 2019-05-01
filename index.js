const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./keys');
const routes = require('./routes/user')

// initialize express
const app = express();
// configure express
app.use(express.json());
app.use('/api/users/', routes);
//connect mongo db
mongoose.connect('mongodb+srv://frank:Thisispassword@cluster0-kxwcz.mongodb.net/test?retryWrites=true', {
    useNewUrlParser:true,
    useCreateIndex: true
})
.then(res => {
    console.log('mongoose connected')
});
// setup port 
const port = process.env.PORT || 5000;

app.listen(port);

module.exports = app;