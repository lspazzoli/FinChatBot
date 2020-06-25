const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const user = require('./Code/Routes/bot');
const port = 3000;


//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/ChatBot';
mongoose.connect(mongoDB, function (err) {

   if (err) throw err;

   console.log('Successfully connected');});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use('/', user);
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server is listening on 3000`)
})
