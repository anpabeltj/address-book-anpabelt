type User = {
  name: string;
  age: number;
};

const users: User[] = [
  {
    name: "Anpabelt",
    age: 21,
  },
  {
    name: "Trah",
    age: 20,
  },
  {
    name: "Javala",
    age: 19,
  },
];

function renderUsers() {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const sentence = concateUserNameAge(user);
    console.log({ sentence });
  }
}

function concateUserNameAge(user = { name: "Example", age: 10 }) {
  return `${user.name} is ${user.age} years old`;
}

function showMessage(name: string, greeting = "Hi") {
  console.log(`${greeting}, ${name}`);
}

renderUsers();
showMessage("Cat"); // Hi, Cat
