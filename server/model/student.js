const {mongoose} = require('./../db/mongoose-coonect')

schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        address:{
            type: String,
            default: "18/B vijayanagar 2"
        }
    }
)

const Student = mongoose.model('student',schema)

module.exports ={
    Student
}