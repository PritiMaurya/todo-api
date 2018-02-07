const mongoClient = require('mongodb').MongoClient
mongoClient.connect('mongodb://localhost:27017/company',(err,db)=>
{
    if(err){
        return console.log('unable to connect');
    }
    console.log('connect to mongodb');

    // db.collection("emp").insertOne(
    //     {
    //         _id: 2,
    //         fname: "Arti",
    //         lname: "Maurya",
    //         email: "arti@gmail.com",
    //         state: "gujarat",
    //         city: "surat"
    //     },(err,result)=>{
    //         if(err)
    //         {
    //             return console.log("unable to insert data")
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2))
    //     }
    // )
    db.close()
});