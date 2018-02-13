const {MongoClient} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/company',(err,db)=>{
    if(err)
    {
        return console.log('not connect')
    }
    console.log('connect');
    var mysort = { name: -1 };
    db.collection("student").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

    });

    db.close()
})