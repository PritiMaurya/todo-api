const {MongoClient} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/company',(err,db)=>
{
    if(err)
    {
        return console.log('unable to connect');
    }
    db.collection("emp").findOneAndDelete({fname:"neha"}).then((res)=>{
        console.log(res)
    })
    db.close()
});