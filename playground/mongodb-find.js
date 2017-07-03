var {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos' , err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Fetching ${count} todos from db`);
  // } , (err)=>{
  //   console.log('Unable to count Todos' , err);
  // });

  db.collection('Users').find({name:'Shubham'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  } , (err)=>{
    console.log('Unable to fetch todos from db');
  });

  db.close();
});
