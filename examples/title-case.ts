// "heLLo wORld" > "Hello World";
// "gooD bYe eveRYone" > "Good Bye Everyone";

function titleCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}

// Quiz: Build your own algorithm

console.log(titleCase("converting string to titlecase"));

console.log(titleCase("heLLo wORld"));

console.log(titleCase("gooD bYe eveRYone"));
