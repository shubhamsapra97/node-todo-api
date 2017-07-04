var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos' , (req,res)=>{

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((docs)=>{
    res.send(docs);
  },(err)=>{
    res.status(400).send(err);
  });
});

app.listen(3000 , ()=>{
  console.log('Started on port 3000');
});

module.exports = {app};
