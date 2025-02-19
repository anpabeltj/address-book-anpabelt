const person = {
  fullName: "Yogi",
  species: "Human",
  age: 30,
};

const { fullName, ...personDetails } = person;

console.log(personDetails);
