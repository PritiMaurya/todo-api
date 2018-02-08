const {mongoose} = require('../server/db/mongoose-coonect')
const {Todo} = require('../server/model/todo')

Todo.find({_id: '5a7c1920355ab8081480c57c' })
    .then((data)=>{
    console.log(JSON.stringify(data,undefined,2))
},(err)=>{
    console.log('data not found');
})
