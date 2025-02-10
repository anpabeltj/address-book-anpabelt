type Contact = {
  id: number;
  avatarUrl?: string;
  url?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  labels: string[];
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

let storeContacts: Contact[] = [
  {
    id: 1,
    avatarUrl: "https://github.com/anpabeltj.png",
    fullName: "Anpabelt Trah Javala",
    email: "anpabelt@gmail.com",
    phoneNumber: "+60142948290",
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
    avatarUrl: "https://github.com/michaeltan.png",
    fullName: "Michael Tan",
    email: "michaeltan@gmail.com",
    phoneNumber: "+60176667788",
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
    avatarUrl: "https://github.com/muhammadarif.png",
    fullName: "Muhammad Arif",
    email: "muh.arif92@yahoo.com",
    phoneNumber: "+60172658963",
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
    avatarUrl: "https://github.com/emmawong.png",
    fullName: "Emma Wong",
    email: "emma.wong54@gmail.com",
    phoneNumber: "+60195543217",
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
];

console.log(storeContacts);
