const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const jwt = require('jsonwebtoken');
const {Users} = require('./../../models/user');

const objId1 = new ObjectID();
const objId2 = new ObjectID();

const users = [
  {
    _id: objId1,
    email: "hello@example.com",
    password: "hello123",
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: objId1,access: 'auth'} , 'abc123').toString()
    }]
  },
  {
    _id: objId2,
    email: "hello1@example.com",
    password: "hello1234"
}];

const todos = [
  {
    _id: new ObjectID(),
    text: 'First test todo'
  },
  {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done)=>{
  Todo.remove({}).then(()=> {
    Todo.insertMany(todos);
  }).then(()=>done());
};

const populateUsers = (done)=>{
  Users.remove({}).then(()=>{
    var user1 = new Users(users[0]).save();
    var user2 = new Users(users[1]).save();

    return Promise.all([user1,user2]);
  }).then(()=>done());
};

module.exports = {todos , populateTodos , users , populateUsers};
