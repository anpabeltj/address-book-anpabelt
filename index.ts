console.log(`============
Address Book
============`);

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
    fullName: "Anpabelt",
    email: "anpabelt@example.com",
    phoneNumber: "+60-2293-383",
    labels: ["friend", "neighbour"],
    birthDate: new Date("1990-6-25"),
    notes: "Studied together at the university",
    avatarUrl: "https://github.com/anpabeltj.png",
    url: "https://anpabelt.com",
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
    fullName: "Trah",
    email: "trah@example.com",
    phoneNumber: "+60-1234-383",
    labels: ["coworker"],
    birthDate: new Date("1995-2-20"),
    notes: "Working in restaurant",
    avatarUrl: "https://github.com/anpabeltj.png",
  },
  {
    id: 3,
    fullName: "Javala",
    email: "javala@example.com",
    phoneNumber: "+60-4567-383",
    labels: ["family"],
    birthDate: new Date("1992-10-12"),
    notes: null,
    avatarUrl: "https://github.com/anpabeltj.png",
  },
];

console.log(storeContacts);
