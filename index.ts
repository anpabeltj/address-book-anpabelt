type Contact = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatarUrl?: string;
  url?: string;
  birthDate?: Date;
  notes?: string | null;
  address?: Address;
  labels?: Label[];
};

type InputContact = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type Label = {
  name: string;
  color: string;
};

let dataContacts: Contact[] = [
  {
    id: 1,
    fullName: "Anpabelt Trah Javala",
    email: "anpabelt@gmail.com",
    phoneNumber: "+60142948290",
    avatarUrl: "https://github.com/anpabeltj.png",
    birthDate: new Date("2003-6-25"),
    notes: "Studied together at the university",
    address: {
      street: "Jalan 1",
      city: "Kuala Lumpur",
      state: "Kuala Lumpur",
      postalCode: "56000",
      country: "Malaysia",
    },
    labels: [
      { name: "friend", color: "blue" },
      { name: "neighbour", color: "green" },
    ],
  },
  {
    id: 2,
    fullName: "Michael Tan",
    email: "michaeltan@gmail.com",
    phoneNumber: "+60176667788",
    avatarUrl: "https://github.com/michaeltan.png",
    birthDate: new Date("1975-12-05"),
    notes: "Former lecturer in data science",
    address: {
      street: "789 Cyberjaya Road",
      city: "Cyberjaya",
      state: "Selangor",
      postalCode: "63000",
      country: "Malaysia",
    },
    labels: [
      { name: "mentor", color: "blue" },
      { name: "teacher", color: "green" },
    ],
  },
  {
    id: 3,
    fullName: "Muhammad Arif",
    email: "muh.arif92@yahoo.com",
    phoneNumber: "+60172658963",
    avatarUrl: "https://github.com/muhammadarif.png",
    birthDate: new Date("1992-11-25"),
    notes: "Cousin from father's side",
    address: {
      street: "15 Taman Merdeka",
      city: "Johor Bahru",
      state: "Johor",
      postalCode: "80050",
      country: "Malaysia",
    },
    labels: [
      { name: "family", color: "red" },
      { name: "cousin", color: "green" },
    ],
  },
  {
    id: 4,
    fullName: "Emma Wong",
    email: "emma.wong54@gmail.com",
    phoneNumber: "+60195543217",
    avatarUrl: "https://github.com/emmawong.png",
    birthDate: new Date("1995-12-10"),
    notes: "Travel buddy during university",
    address: {
      street: "78 Jalan Pantai",
      city: "Melaka",
      state: "Melaka",
      postalCode: "75000",
      country: "Malaysia",
    },
    labels: [
      { name: "university friend", color: "blue" },
      { name: "traveler", color: "orange" },
    ],
  },
  {
    id: 5,
    fullName: "Example Person",
    email: "example@example.com",
    phoneNumber: "+60123456789",
  },
];

function renderContacts() {
  for (const contact of dataContacts) {
    console.log(`
Name: ${contact.fullName}
Email: ${contact.email}
Phone Number: ${contact.phoneNumber}
Avatar: ${contact.avatarUrl}
Birth Date: ${contact.birthDate}
Notes: ${contact.notes}`);

    if (contact.address) {
      console.log(`Address: ${contact.address.street}, ${contact.address.city}, ${contact.address.state}, ${contact.address.postalCode}, ${contact.address.country}`);
    }

    if (contact.labels && contact.labels?.length > 0) {
      console.log(`Labels:`);
      for (let labelIndex = 0; labelIndex < contact.labels.length; labelIndex++) {
        const label = contact.labels[labelIndex];
        console.log(`- ${label.name}`);
      }
    }
  }
}

renderContacts();

// // QUIZ: Level 1
// function searchContactByName(name: string) {

//   const inputName  = prompt ("Enter Fullname: ")

//   console.log(inputName);

//   if name == inputName(

//   )

// }
// searchContactByName();

// // QUIZ: Level 2
// function searchContactByKeyword(keyword: string) {}

// // QUIZ: Level 3
// function deleteContactById(id: number) {}

// // QUIZ: Level 4
// function addContact(contact: InputContact) {}

// // QUIZ: Level 5
// function updateContact(contact: InputContact) {}

// // QUIZ: Level 10
// function calculateAverageAge() {}
