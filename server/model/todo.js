var {mongoose} = require('../db/mongoose-coonect')


todoSchema = new mongoose.Schema(
    {
        text:{
            type: String,
            required:true
        },
        complete:{
            type:Boolean,
            default: false
        },
        completeAt:{
            type:Number,
            default:null
        }
    }
);



var Todo = mongoose.model('Todo',todoSchema);

module.exports={
    Todo
}


