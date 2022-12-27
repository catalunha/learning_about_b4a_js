console.log('Start');
// In a node.js environment
const Parse = require('parse/node');
Parse.initialize("x4uHx8hJECtAPiKo4Z2f8IK9OUKRtcuUBBaUBHM9", "BzNK4dwZ1UvFcgsyQum6jktmOFUrxr4EcgaS4Mp7");
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'https://parseapi.back4app.com'

function getOne() {
  console.log('getOne');
  const Genre = Parse.Object.extend("Genre");
  const query = new Parse.Query(Genre);
  // query.equalTo("typeString", 'Genre01');
  // query.first().then((genre) => {
  query.get('Twv7hnpF9E').then((genre) => {
    // The object was retrieved successfully.
    const typeString = genre.get("typeString");
    console.log('getOne.typeString');
    console.log(typeString);

  }, (error) => {
    console.log('teste3');
    console.log(error);
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  });
}
async function getOne2() {
  console.log('getOne2');
  const Genre = Parse.Object.extend("Genre");
  const query = new Parse.Query(Genre);
    try {
      // query.equalTo("typeString", 'Genre02');
    const result = await query.first();
    // const result = await query.get('Twv7hnpF9E');
    const typeString = result.get("typeString");
    console.log('getOne2.typeString');
    console.log(typeString);
  } catch (error) {
    console.error('Error while fetching Genre', error);
  }
}
getOne();
getOne2();
console.log('End');


// (async () => {
//   const Genre = Parse.Object.extend('Genre');
//   const query = new Parse.Query(Genre);
//   // You can also query by using a parameter of an object
//   // query.equalTo('objectId', 'xKue915KBG');
//   try {
//     const results = await query.find();
//     for (const object of results) {
//       // Access the Parse Object attributes using the .GET method
//       const typeString = object.get('typeString')
//       const typeBoolean = object.get('typeBoolean')
//       const typeNumber = object.get('typeNumber')
//       const typeArray = object.get('typeArray')
//       const typeDateTime = object.get('typeDateTime')
//       console.log(typeString);
//       console.log(typeBoolean);
//       console.log(typeNumber);
//       console.log(typeArray);
//       console.log(typeDateTime);
//     }
//   } catch (error) {
//     console.error('Error while fetching Genre', error);
//   }
// })();