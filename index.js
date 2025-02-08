console.log(`============
Address Book
============`);

let dataContacts = [
  {
    id: 1,
    avatarUrl: "https://github.com/anpabeltj.png",
    url: "https://anpabelt.com",
    fullName: "Anpabelt",
    email: "anpabelt@example.com",
    phoneNumber: "+60-2293-383",
    labels: ["friend", "neighbour"],
    birthDate: new Date("1990-6-25"),
    notes: "Studied together at the university",
    address: {
      street: "Jalan 1",
      city: "Kuala Lumpur",
      state: "Kuala Lumpur",
      postalCode: "56000",
      country: "Malaysia",
    },
  },
  {
    id: 2,
    avatarURL: "https://github.com/anpabeltj.png",
    fullName: "Trah",
    email: "trah@example.com",
    phoneNumber: "+60-1234-383",
    labels: ["coworker"],
    birthDate: new Date("1995-2-20"),
    notes: "Working in restaurant",
  },
  {
    id: 3,
    avatarURL: "https://github.com/anpabeltj.png",
    fullName: "Javala",
    email: "javala@example.com",
    phoneNumber: "+60-4567-383",
    labels: ["family"],
    birthDate: new Date("1992-10-12"),
    notes: null,
  },
];

console.log(dataContacts);
