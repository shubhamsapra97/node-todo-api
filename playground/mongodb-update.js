var {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to MongoDb Server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("595a85e14953f61b283b44c5")
  } , {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("595961d28b7cde26e0b2d4f0")
  } , {
    $set: {
      name: 'Shubham'
    },
    $inc: {
      age: 1
    }
  } , {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })

  db.close();
});
