const express = require("express");
const path = require("path");
const pug = require("pug");
const app = express();

app.set("views", path.join(__dirname,"views"));
app.set("view engine","pug");

app.get('/home',(req,res)=>{
    const subject = ["Devops","cc","cd","mpmc"];
    res.render('sample.pug',{'sub':subject});
});
app.listen(4000,()=>{
    console.log("successfully");
});