const names = ["Adi", "Budi", "Caca"];

const modifiedNames = names.map((name) => {
  if (name === "Budi") {
    return name.toUpperCase();
  } else {
    return name;
  }
});

console.log({ modifiedNames });
