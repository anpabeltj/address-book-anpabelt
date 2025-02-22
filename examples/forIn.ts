const fruits = [
  { name: "Apple", quality: 10 },
  { name: "Orange", quality: 8 },
  { name: "Pear", quality: 9 },
];

for (let index in fruits) {
  console.log(fruits[index].quality); // 10, 8, 9
  console.log(fruits[index].name); // Apple, Orange, Pear
  console.log(index); // 0, 1, 2
}
