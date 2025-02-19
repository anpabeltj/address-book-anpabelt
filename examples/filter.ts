const namesToFilter = ["Adi", "Budi", "Caca"];

const filteredNames = namesToFilter.filter((name) => {
  if (name !== "Budi") {
    return name;
  }
});

console.log({ filteredNames });
