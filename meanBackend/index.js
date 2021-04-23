var http = require('http');
var express = require('express');
var port = process.env.PORT||8080;
var app=express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
mongoose.connect('mongodb://localhost/meanDb',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',appRoutes);

http.createServer(app).listen(port);

console.log("Backend runinng on port :",port)