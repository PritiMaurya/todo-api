const {mongoose} = require('../server/db/mongoose-coonect')
const {Todo} = require('../server/model/todo')
const {Student} =require('../server/model/student')

Todo.remove({}).then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err);
})