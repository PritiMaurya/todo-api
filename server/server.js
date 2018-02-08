var express = require('express')
var bodyParser = require('body-parser')
var {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose-coonect')
var {Todo} = require('./model/todo')
var {User} = require('./model/user')

var app = new express();
var port = process.env.PORT || 3001
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

app.get('/todos',(req,res)=>
{
   Todo.find().then((todos)=>{
       console.log(todos);
       res.send({todos:todos})
   },(err)=>{
       res.status(400);
   })
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.find({_id:id}).then((data)=>{
        res.send({data});
    })
})


app.listen(port,()=>
{
    console.log('started on port 3001');
});

module.exports =
    {
        app
    }







