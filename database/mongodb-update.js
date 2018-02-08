const {MongoClient} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/company',(err,db)=>
{
    if(err){
        return console.log('Does not connect')
    }
    console.log('Connected to mongodb');
    db.collection("emp").findOneAndUpdate({lname:"chauhan"},{$set : {fname:"priti",lname:"maurya",mob:8530180020}}).then(
        (res)=>{
            console.log(JSON.stringify(res,undefined,2))
        },
        (err)=>{console.log(err)}
    )
    db.close()
})