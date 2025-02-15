const users = [
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

function concateUserNameAge(name: string, age: number) {
  return `${name} is ${age} years old`;
}

function renderUsers() {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const sentence = concateUserNameAge(user.name, user.age);
    console.log({ sentence });
  }
}

renderUsers();
