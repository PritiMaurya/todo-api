var env = process.env.NODE_ENV || 'development'
console.log("*****env*****  ",env)
if(env === 'development'){
    process.env.PORT = 3001;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/company';
}
else if(env === 'test')
{
    process.env.PORT = 3001;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/companyTest';
}


const express = require('express')
const {ObjectID} = require('mongodb')
var _ = require('lodash')

var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose-coonect')
var {Todo} = require('./model/todo')
var {User} = require('./model/user')
var {Student} = require('./model/student')
var {Users} = require('./model/users')

var app = new express();
var port = process.env.PORT || 3001
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{

    var newTodo = new Todo({
        complete: req.body.complete,
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


//to delete
app.delete('/user/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    User.findByIdAndRemove(id).then(
        (doc)=>{
            if(!doc){
                res.status(404).send()
            }
            res.send(doc)
        }
    ).catch((e)=>{
        res.status(400).send();
    })
});



//update

app.patch('/todos/:id',(req,res)=>{

   var id = req.params.id;

   if(!ObjectID.isValid(id)){
       return res.status(404).send();
   }

   var body = _.pick(req.body,['text','complete'])

    if(_.isBoolean(body.complete) && body.complete)
    {
        body.completeAt = new Date().getTime();
    }
    else
    {
        body.completeAt = null;
        body.complete = false;
    }

   Todo.findByIdAndUpdate(id,{$set: body},{new: true}).then(
       (doc)=>{
           if(!doc){
               return res.status(404).send();
           }
           res.send(doc)
       }
   ).catch((e)=>{
       return res.status(404).send()
   })
});


//insert into users doc

app.post('/users',(req,res)=>{

    body = _.pick(req.body,["email","password"])
    user = new Users(
        {
            email: body.email,
            password: body.password
        })
    user.save().then(()=>{
      return user.generateAuthToken()
    }).then((token)=>{
        res.header('x-auth',token).send(user)
    }).catch((e)=>{
        res.status(404).send(e)
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







