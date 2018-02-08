var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose-coonect')
var {Todo} = require('./model/todo')
var {User} = require('./model/user')

var app = new express();
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{

    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc)=>{
      res.send(doc)
    },(err)=>{
        res.status(400).send(err)
    })
});

app.listen(3001,()=>
{
    console.log('started on port 3001');
});






