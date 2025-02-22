const names = ["Adi", "Budi", "Caca"];

const updatedNames = names.map((name) => {
  if (name === "Budi") {
    return name.toUpperCase();
  } else {
    return name;
  }
});

console.log({ updatedNames });
