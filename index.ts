type Contact = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatarUrl?: string;
  url?: string;
  labels?: string[];
  birthDate?: Date;
  notes?: string | null;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
};

let dataContacts: Contact[] = [
  {
    id: 1,
    fullName: "Anpabelt Trah Javala",
    email: "anpabelt@gmail.com",
    phoneNumber: "+60142948290",
    avatarUrl: "https://github.com/anpabeltj.png",
    labels: ["friend", "neighbour"],
    birthDate: new Date("2003-6-25"),
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
    fullName: "Michael Tan",
    email: "michaeltan@gmail.com",
    phoneNumber: "+60176667788",
    avatarUrl: "https://github.com/michaeltan.png",
    labels: ["mentor", "teacher"],
    birthDate: new Date("1975-12-05"),
    notes: "Former lecturer in data science",
    address: {
      street: "789 Cyberjaya Road",
      city: "Cyberjaya",
      state: "Selangor",
      postalCode: "63000",
      country: "Malaysia",
    },
  },
  {
    id: 3,
    fullName: "Muhammad Arif",
    email: "muh.arif92@yahoo.com",
    phoneNumber: "+60172658963",
    avatarUrl: "https://github.com/muhammadarif.png",
    labels: ["family", "cousin"],
    birthDate: new Date("1992-11-25"),
    notes: "Cousin from father's side",
    address: {
      street: "15 Taman Merdeka",
      city: "Johor Bahru",
      state: "Johor",
      postalCode: "80050",
      country: "Malaysia",
    },
  },
  {
    id: 4,
    fullName: "Emma Wong",
    email: "emma.wong54@gmail.com",
    phoneNumber: "+60195543217",
    avatarUrl: "https://github.com/emmawong.png",
    labels: ["university friend", "traveler"],
    birthDate: new Date("1995-12-10"),
    notes: "Travel buddy during university",
    address: {
      street: "78 Jalan Pantai",
      city: "Melaka",
      state: "Melaka",
      postalCode: "75000",
      country: "Malaysia",
    },
  },
  {
    id: 5,
    fullName: "Example Person",
    email: "example@example.com",
    phoneNumber: "+60123456789",
  },
];

function renderContacts() {
  for (let index = 0; index < dataContacts.length; index++) {
    const contact = dataContacts[index];

    console.log(`
Name: ${contact.fullName}
Email: ${contact.email}
TODO: Continue
`);
  }
}

renderContacts();
