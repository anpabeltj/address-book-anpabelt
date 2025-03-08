async function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async function has resolved");
    }, 1000);
  });
}

async function runSomething() {
  const message = await asyncFunction();
  console.log(message);
}
