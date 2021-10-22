const servers = function servers1(){
    const { RSA_NO_PADDING } = require("constants");
    const express = require("express");
    const app = express();
    const https = require("https");
    app.use(express.urlencoded({extended:false}));
    app.use(express.static("public"));
    app.set("view engine","ejs");
    app.use(express.json())
    

}
module.exports=servers;