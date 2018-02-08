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
    const data = [
        { _id: 1, name: 'William', address: 'Central st 954'},
        { _id: 2, name: 'Viola', address: 'Sideway 1633'},
        { _id: 3, name: 'Vicky', address: 'Yellow Garden 2'},
        { _id: 4, name: 'Susan', address: 'One way 98'},
        { _id: 5, name: 'Sandy', address: 'Ocean blvd 2'},
        { _id: 6, name: 'Richard', address: 'Sky st 331'},
        { _id: 7, name: 'Peter', address: 'Lowstreet 4'},
        { _id: 8, name: 'Michael', address: 'Valley 345'},
        { _id: 9, name: 'John', address: 'Highway 71'},
        { _id: 10, name: 'Hannah', address: 'Mountain 21'},
        { _id: 11, name: 'Chuck', address: 'Main Road 989'},
        { _id: 12, name: 'Betty', address: 'Green Grass 1'},
        { _id: 13, name: 'Ben', address: 'Park Lane 38'},
        { _id: 14, name: 'Amy', address: 'Apple st 652'}
    ]
    db.collection("student").insertMany(data).then(
        (res)=>{console.log(JSON.stringify(res.ops,undefined,2))},
        (err)=>{console.log(err)}
    )
    db.close()
});