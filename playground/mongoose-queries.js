const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

var id = '595c035d97ac223b24bc6b6a11';

if(!ObjectID.isValid()){
  console.log('Id not valid');
}

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by id',todo);
}).catch((err)=>console.log(err));

var id = '595ab9c122c70e0a1811ca7011';

Users.findById(id).then((user)=>{
  if(!user){
    return console.log('Id not found');
  }
  console.log('User By id',user);
}).catch((err)=>console.log(err));
