const user =
  '{ "name": "Alpaca", "age": 25, "isAdmin": false, "friends": [0, 1, 2, 3] }';

const userJSON = JSON.parse(user);

console.log(userJSON);
