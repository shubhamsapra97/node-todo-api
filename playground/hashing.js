const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// jwt Method

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('Decoded', decoded);

// SHA256 Method

var message = 'Shubham';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 4,
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultToken = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if(resultToken === token.hash){
  console.log('Data not changed');
}
else{
  console.log('Data manipulated');
}
