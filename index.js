console.log('Start');
// In a node.js environment
const Parse = require('parse/node');
Parse.initialize("x4uHx8hJECtAPiKo4Z2f8IK9OUKRtcuUBBaUBHM9", "BzNK4dwZ1UvFcgsyQum6jktmOFUrxr4EcgaS4Mp7");
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'https://parseapi.back4app.com'

const Genre = Parse.Object.extend("Genre");
const query = new Parse.Query(Genre);
// query.equalTo("typeString", 'Genre01');
// query.first().then((genre) => {
  query.get('Twv7hnpF9E').then((genre) => {
  // The object was retrieved successfully.
  const typeString = genre.get("typeString");
  console.log(typeString);
  console.log('teste2');
  
}, (error) => {
  console.log('teste3');
  console.log(error);
  // The object was not retrieved successfully.
  // error is a Parse.Error with an error code and message.
});
console.log('End');
