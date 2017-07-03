var {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to MongoDb Server');

  deleteMany
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((docs)=>{
    console.log(docs);
  });

  deleteOne
  db.collection('Todos').deleteOne({text: 'Eat unch'}).then((result)=>{
    console.log(result);
  });

  findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'Shubham'}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("595a306c9a165027b44d9962")
  }).then((result)=>{
    console.log(result);
  });

  db.close();
});
