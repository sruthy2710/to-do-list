
const { RSA_NO_PADDING } = require("constants");
    const express = require("express");
    const app = express();
    const https = require("https");
    app.use(express.urlencoded({extended:false}));
    app.use(express.static("public"));
    app.set("view engine","ejs");
    app.use(express.json())
    const mongoose  = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/listDB',{useNewUrlParser:true})
const Router = require('./routes/lists') //requiring the file contents
app.use('/', Router) //path is mounted, callback of content
app.listen(3000);




