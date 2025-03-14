(() => {
  type Contact = {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    avatarUrl?: string | null;
    url?: string | null;
    birthDate?: Date | null;
    notes?: string | null;
    address?: Address;
    labels?: Label[];
  };

  type InputContact = {
    fullName: string;
    email: string;
    phoneNumber: string;
    address?: Address;
    avatarLinkUrl: String;
  };

  type Address = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };

  type InputBirthDate = {
    date: string;
    month: string;
    year: string;
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
      birthDate: new Date("2020-1-1"),
    },
  ];

  function save(contacts: Contact[]) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  function load() {
    const contacts = localStorage.getItem("contacts");

    if (!contacts) {
      save(dataContacts);
      return dataContacts;
    }

    return JSON.parse(contacts) as Contact[];
  }

  // QUIZ: Level 7
  function displayBirthDate(birthDate?: Date | null) {
    if (!birthDate) {
      return "No birth date";
    }
    // TODO: Format the birth date to 00 Month 0000
    return birthDate;
  }

  function renderContactObject(contact: Contact) {
    console.info(`
      ID: ${contact.id}
      Name: ${contact.fullName}
      Email: ${contact.email}
      Phone Number: ${contact.phoneNumber}
      Avatar: ${contact.avatarUrl}
      Birth Date: ${displayBirthDate(contact.birthDate)}
      Notes: ${contact.notes}`);

    if (contact.address) {
      console.info(
        `Address: ${contact.address.street}, ${contact.address.city}, ${contact.address.state}, ${contact.address.postalCode}, ${contact.address.country}`
      );
    }

    if (contact.labels && contact.labels.length > 0) {
      console.info(`Labels:`);
      contact.labels.forEach((label) => {
        console.info(`- ${label.name} (${label.color})`);
      });
    }
  }

  function renderContacts(contacts: Contact[]) {
    contacts.forEach((contact) => {
      renderContactObject(contact);
    });
  }

  function renderContactById(contacts: Contact[]) {
    const inputId = prompt("\nEnter contact ID to display:");

    if (!inputId) {
      console.info("Please enter ID");
      return null;
    }

    const id = parseInt(inputId);

    const foundContact = contacts.find((contact) => contact.id === id);

    if (!foundContact) {
      console.info("No contact found");
      return null;
    }

    renderContactObject(foundContact);
  }

  // QUIZ: Level 1 ✅

  function searchContactByName(contacts: Contact[]) {
    const inputName = prompt("Enter Fullname: ");

    if (!inputName) {
      console.info("Please enter name:");
      return null;
    }

    const lowerCasedInputName = inputName.toLowerCase();

    const foundContacts = contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(lowerCasedInputName)
    );

    if (foundContacts.length <= 0) {
      console.info("No contacts found");
      return null;
    }

    renderContacts(foundContacts);
  }

  // QUIZ: Level 2 ✅
  function searchContactByKeyword(contacts: Contact[]) {
    const inputKeyword = prompt("Enter Keyword: ");

    if (!inputKeyword) {
      console.info("Please enter name:");

      return null;
    }
    const lowerInputKeyword = inputKeyword.toLowerCase();

    const foundContacts = contacts.filter(
      (contact) =>
        contact.fullName.toLowerCase().includes(lowerInputKeyword) ||
        contact.email.toLowerCase().includes(lowerInputKeyword) ||
        contact.phoneNumber.toLowerCase().includes(lowerInputKeyword) ||
        contact.notes?.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.street.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.city.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.state.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.country.toLowerCase().includes(lowerInputKeyword)
    );

    if (foundContacts.length <= 0) {
      console.info("No contacts found");
      return null;
    }
    renderContacts(foundContacts);
  }

  // QUIZ: Level 3 ✅
  function deleteContactById(contacts: Contact[]) {
    const inputId = prompt("Enter contact ID to delete:");

    if (!inputId) {
      console.info("Please enter ID");

      return null;
    }

    const id = parseInt(inputId);

    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    dataContacts = updatedContacts;

    console.info(`Contact with ID '${id} has been deleted'`);
  }

  // QUIZ: Level 4 ✅
  function addContact(contacts: Contact[]) {
    const inputContact: InputContact = {
      fullName: prompt("Enter Full Name:") || "",
      email: prompt("Enter Email:") || "",
      phoneNumber: prompt("Enter Phone Number:") || "",
      avatarLinkUrl: prompt("Enter your avatar link url:") || "",
    };

    console.info("🏠 Address");

    const inputAddress: Address = {
      street: prompt("Enter Street:") || "",
      city: prompt("Enter City:") || "",
      state: prompt("Enter State:") || "",
      postalCode: prompt("Enter Postal Code:") || "",
      country: prompt("Enter Country:") || "",
    };

    // QUIZ: Level 5
    console.info("📅 Birthdate");
    const inputBirthDate: InputBirthDate = {
      date: prompt("Enter your birth date (DD):") || "",
      month: prompt("Enter your birth month (MM):") || "",
      year: prompt("Enter your birth year (YYYY):") || "",
    };

    const inputBirthDateString = `${inputBirthDate.year}-${inputBirthDate.month}-${inputBirthDate.date}`;

    const birthDate = new Date(inputBirthDateString);

    const newContact: Contact = {
      id: contacts[contacts.length - 1].id + 1,
      ...inputContact,
      address: inputAddress,
      avatarUrl: null,
      birthDate,
      notes: "",
    };

    save([...dataContacts, newContact]);

    console.info("New contact has been added.");
  }

  // QUIZ: Level 6 ✅
  function updateContact(contacts: Contact[]) {
    const inputId = prompt("\nEnter contact ID to edit:");

    if (!inputId) {
      console.info("\nPlease enter ID");
      return null;
    }

    const id = parseInt(inputId);

    const contact = contacts.find((contact) => contact.id === id);

    console.info("\nEnter new detail, or leave it blank each to not modify\n");
    const inputContact: InputContact = {
      fullName:
        prompt(`Enter Full Name: (${contact?.fullName})`) ||
        contact?.fullName ||
        "",
      email: prompt(`Enter Email: (${contact?.email})`) || contact?.email || "",
      phoneNumber:
        prompt(`Enter Phone Number: (${contact?.phoneNumber})`) ||
        contact?.phoneNumber ||
        "",
      avatarLinkUrl:
        prompt(`Enter your avatar link url: (${contact?.avatarUrl})`) ||
        contact?.avatarUrl ||
        "",
    };

    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, ...inputContact };
      }
      return contact;
    });

    dataContacts = updatedContacts;

    console.info("Contact has been updated.");
  }

  // QUIZ: Level 7 ✅
  function sortContactsByName(contacts: Contact[]) {
    const sortedContacts = contacts.sort((previousContact, nextContact) => {
      if (previousContact.fullName > nextContact.fullName) return 1;
      if (previousContact.fullName < nextContact.fullName) return -1;
      return 0;
    });

    renderContacts(sortedContacts);
  }

  // QUIZ: Level 8 ✅
  function calculateAge(birthDate?: Date | null) {
    if (!birthDate) {
      return undefined;
    }

    const today = new Date();
    const todayYear = today.getFullYear();
    const birthDateYear = birthDate.getFullYear(); // Notes: Very simple naive way to calculate age

    const age = todayYear - birthDateYear;
    return age;
  }

  // QUIZ: Level 9 ✅
  function calculateAverageAge(contacts: Contact[]): number {
    const ages = contacts.map((contact) => calculateAge(contact.birthDate));

    const totalAge =
      ages.reduce((sum, age) => {
        if (sum === undefined) return age;
        if (age === undefined) return sum;
        return sum + age;
      }, 0) || 0;

    const averageAge = totalAge / contacts.length;

    return averageAge;
  }

  // Quiz: Level 12
  function showMainMenu() {
    let running = true;

    while (running) {
      const menuText = `
=== Main Menu ===
1. Display all contacts
2. Display contact by ID
3. Search contact by name
4. Add new contact
5. Update contact
6. Delete contact
7. Sort contacts by name
0. Exit
Please enter your choice:`;

      const choice = Number(prompt(menuText));

      switch (choice) {
        case 0:
          console.info("Exiting application. Have a great day!");
          running = false;
          break;
        case 1:
          console.info("You selected: Display all contacts.");
          renderContacts(dataContacts);
          break;
        case 2:
          console.info("You selected: Display contact by ID.");
          renderContactById(dataContacts);
          break;
        case 3:
          console.info("You selected: Search contact by name.");
          searchContactByName(dataContacts);
          break;
        case 4:
          console.info("You selected: Add new contact.");
          addContact(dataContacts);
          break;
        case 5:
          console.info("You selected: Update contact.");
          updateContact(dataContacts);
          break;
        case 6:
          console.info("You selected: Delete contact.");
          deleteContactById(dataContacts);
          break;
        case 7:
          console.info("You selected: Sort contacts by name.");
          sortContactsByName(dataContacts);
          break;
        default:
          console.info("Invalid option. Please try again.");
          break;
      }
    }
  }

  // renderContacts(load());
  // addContact(load());

  const userFullNameElement = document.getElementById("user-fullname");
  if (!userFullNameElement) return;

  userFullNameElement.innerHTML = "Example User";
})();
