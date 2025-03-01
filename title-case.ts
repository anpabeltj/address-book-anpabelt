// "heLLo wORld" > "Hello World";
// "gooD bYe eveRYone" > "Good Bye EVeryone";

// Title Case Quiz

function titleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

console.log(titleCase("converting string to titlecase"));
