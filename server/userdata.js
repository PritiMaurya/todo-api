var {mongoose} = require('./db/mongoose-coonect')
var {User} =  require('./model/user')
var express = require('express');
var bodyParser = require('body-parser')
var app = new express()
app.use(bodyParser.json())

app.post('/user',(req,res)=>
{
    var newData = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });
    newData.save().then((doc)=>{
        res.send(doc).status(200)
        },
        (err)=>{
        res.send(err).status(400);
        })
});


app.listen('3001',()=>{})