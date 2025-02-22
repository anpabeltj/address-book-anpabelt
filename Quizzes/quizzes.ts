type ExContact = {
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

let ExdataContacts: ExContact[] = [
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

// QUIZ: Level 1

function searchContactByName(contacts: ExContact[]) {
  const inputName = prompt("Enter Fullname: ");

  if (inputName) {
    const lowerCase = inputName.toLowerCase();

    // Find contact with exact full name match
    const result = contacts.find((contact) => contact.fullName.toLowerCase() === lowerCase);

    // Display full contact data if found
    if (result) {
      console.log(`
        Name: ${result.fullName}
        Email: ${result.email}
        Phone Number: ${result.phoneNumber}
        Avatar: ${result.avatarUrl}
        Birth Date: ${result.birthDate}
        Notes: ${result.notes}`);

      if (result.address) {
        console.log(`Address: ${result.address.street}, ${result.address.city}, ${result.address.state}, ${result.address.postalCode}, ${result.address.country}`);
      }

      if (result.labels && result.labels.length > 0) {
        console.log(`Labels:`);
        for (const label of result.labels) {
          console.log(`- ${label.name} (${label.color})`);
        }
      }
    } else {
      console.log("No matches found. Please enter the exact full name.");
    }
  } else {
    console.log("No data found");
  }
}

searchContactByName(ExdataContacts);

// QUIZ: Level 2
function searchContactByKeyword(contacts: ExContact[]) {
  const inputKeyword = prompt("Enter Keyword: ");
  if (inputKeyword) {
    const lowerCase = inputKeyword.toLowerCase();

    const result = contacts.filter((contact) => contact.fullName.toLowerCase().includes(lowerCase));

    // Display results
    if (result.length > 0) {
      for (const contact of result) {
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
    } else {
      console.log("No matches found.");
    }
  } else {
    console.log("No data found");
  }
}

searchContactByKeyword(ExdataContacts);

// QUIZ: Level 3
function deleteContactById(contacts: ExContact[]) {
  const inputID = parseInt(prompt("Enter Id:\n") || "0", 10);

  if (inputID) {
    const findIndex = contacts.findIndex((contact) => contact.id === inputID);

    if (findIndex !== -1) {
      contacts.splice(findIndex, 1);
      const contact = contacts[findIndex];

      console.log("Remaining Contacts:\n");

      contacts.forEach((contact) =>
        console.log(`
        Name: ${contact.fullName}
        Email: ${contact.email}
        Phone Number: ${contact.phoneNumber}
        Avatar: ${contact.avatarUrl}
        Birth Date: ${contact.birthDate}
        Notes: ${contact.notes}`)
      );

      if (contact.address) {
        console.log(`Address: ${contact.address.street}, ${contact.address.city}, ${contact.address.state}, ${contact.address.postalCode}, ${contact.address.country}`);
      }

      if (contact.labels && contact.labels.length > 0) {
        console.log(`Labels:`);
        for (let labelIndex = 0; labelIndex < contact.labels.length; labelIndex++) {
          const label = contact.labels[labelIndex];
          console.log(`- ${label.name}`);
        }
      }

      console.log(`\nContact with ID ${inputID} has been deleted.`);
    } else {
      console.log("No contact found with that ID.");
    }
  } else {
    console.log("Invalid ID entered.");
  }
}

deleteContactById(ExdataContacts);

// QUIZ: Level 4
function addContact(contacts: ExContact[]) {}

// QUIZ: Level 5
function updateContact(contact: InputContact) {}

// QUIZ: Level 10
function calculateAverageAge() {}
