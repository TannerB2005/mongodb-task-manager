// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name: 'Tanner',
//         age: 19
//     })
//  })
const { MongoClient, ObjectId } = require('mongodb');


const id = new ObjectId()

async function run() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('task-manager');
        const collection = database.collection('inventory');

        
        const doc = ([
        { 
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Renew inspection',
            completed: false
        }, {
            description: 'Pot plants',
            completed: false
        },
   
     // continue on folder 11 
     ,])
          const result = await database.collection('inventory').deleteMany({
            description: "Clean the house"
          });

        console.log(`Document: ${result} deleted`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
