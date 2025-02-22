// const numbers = [1, 2, 3, 4, 5];

// const continuedNumber = [...numbers, 6, 7, 8, 9, 10];

// console.log(continuedNumber);

const animal = {
  name: "Yogi",
  species: "Bear",
};

const updatedAnimal = {
  ...animal,
  species: "Cat",
  color: "Brown",
};

console.log(updatedAnimal);
