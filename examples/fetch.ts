const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholde.typicode.com/users");
    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error("Error:", error);
  }
};

getUsers();
