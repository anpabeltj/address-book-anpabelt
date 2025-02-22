const numbers = [1, 2, 3, 4, 5]; // 15

const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log({ sum });
