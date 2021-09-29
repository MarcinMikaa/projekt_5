const mongo = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const ObjectID = mongo.ObjectID;

const url = 'mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net';
const dbname = 'marcin-mongo-test';

mongoClient.connect(url, {}, (error, client) => {
    if (error) {
        console.log('Can not connect to the database');
    }
        
    const db = client.db(dbname);

    // const id = new ObjectID();
    // console.log(id.str);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Sam',
    //     age: 30
    // }, (error, results) => {
    //     if (error) {
    //         console.log('Adding user error', error);
    //     }
    //     // console.log(result.ops);
    // });

 
    // db.collection('users').deleteOne({
    //     age: 25
    // }, (error, result) => {
    //     console.log(result)
    // });


    // const id = new ObjectID("6152d2e366a3d4cb4410cd36");
    // console.log(id.getTimestamp());


    // db.collection('users').find({}).toArray((error, results) => {
    //     console.log(results);
    // })
    
    console.log('Database connection is Ok');
});