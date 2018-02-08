var {mongoose} = require('../db/mongoose-coonect')
var userSchema = new mongoose.Schema
({
    name: {
        type: String,
        minLength: 1,
        required: true
    },
    email:{
        type: String,
        minLength:1,
        required: true,
        trim: true
    },
    mobile:{
        type: Number,
        minLength:10,
        required:true
    }
})

var userData = mongoose.model('user',userSchema);

module.exports={
    userData
}