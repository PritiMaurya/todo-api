const {mongoose} = require('../db/mongoose-coonect')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
validator = require('validator')

var schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique:true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        password:{
            type: String,
            required: true,
            minlength: 6
        },
        tokens: [
            {
                access:{
                    type: String,
                    required: true
                },
                token:{
                    type: String,
                    required: true
                }
            }
        ]
    }
);

schema.methods.toJson = function () {
    var user = this;
    var userObj = user.toObject()
    return _.pick(userObj,['_id','email']);
}


schema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(),access},'priti123').toString();
    user.tokens.push({access,token});
    return user.save().then(()=>{
        return token
    })
}


Users = mongoose.model('users',schema)


module.exports ={
    Users
}