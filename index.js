// REQUIRE NECESSARY MODULES
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// CREATE DB CONNECTION
mongoose.connect("mongodb://localhost:27017/express_starter", {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(() => console.log('Error connecting to MongoDB...'));


// CREATE YOUR SCHEMA
const yourSchema = new mongoose.Schema({
    title: String
});

// CREATE THE MODEL IN DB
const Blog = mongoose.model('Blog', yourSchema);


// CREATE FIRST ROUTE
app.get('/', (req, res) => {
    res.send('Welcome');
});

// CREATE SERVER CONNECTION
app.listen(8080, (req, res) => console.log('Server started on port 8080...'));
