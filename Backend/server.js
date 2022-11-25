const express = require('express');
const app =  require("./app");
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/Structures', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});