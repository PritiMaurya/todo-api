const {MongoClient, ObjectId}  = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/company',(err,db)=>
{
    if(err){
        return console.log('unable to connect');
    }
    console.log('connect to mongodb');
    // db.collection("emp").find({fname:"Arti"}).toArray().then(
    //     (docs)=>{
    //         console.log("emp");
    //         console.log(JSON.stringify(docs,undefined,2));
    //     },
    //     (err)=>{
    //         console.log("can not find data")
    //     }
    // )

    db.collection("emp").find({fname:"priti"}).count().then(
        (count)=>{
            console.log("emp");
            console.log(count);
        },
        (err)=>{
            console.log("can not find data")
        }
    )
    db.close()
});