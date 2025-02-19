const user = { name: "Adi" };
const permissions1 = { canView: true };
const permissions2 = { canEdit: true };

const updatedUser = {
  ...user,
  ...permissions1,
  ...permissions2,
};

console.log(updatedUser);
