// const MongoClient = require('mongodb').MongoClient;

var {MongoClient , ObjectID} = require('mongodb');

// var user = {name:'Shubham' , age:20};
//
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to todo',
  //   completed: false
  // } , (err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo' ,err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops , undefined , 2));
  // });

  db.collection('Users').insertOne({
    name: 'Shubham',
    age: 20,
    location: 'Hoshiarpur'
  } , (err , result)=>{
      if(err){
        return console.log('Unable to insert todo' , err);
      }

      console.log(JSON.stringify(result.ops , undefined , 2));
  });

  db.close();
});
