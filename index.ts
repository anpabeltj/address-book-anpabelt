(() => {
  type Contact = {
    id: number;
    fullName: string;
    email?: string;
    phoneNumber?: string;
    avatarUrl?: string;
    url?: string;
    birthDate?: Date;
    notes?: string;
    address?: Address;
    labels?: Label[];
  };

  type CreateContactData = {
    fullName: string;
    email?: string;
    phoneNumber?: string;
    birthDate?: Date;
    notes?: string;
    address?: Address;
    labels?: Label[];
  };

  type InputContact = {
    fullName: string;
    email: string;
    phoneNumber: string;
    address?: Address;
    avatarLinkUrl: string;
  };

  type Address = {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
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

    const arrayContacts = JSON.parse(contacts) as Contact[];

    const sanitizedContacts = arrayContacts.map((contact) => {
      if (contact.birthDate) {
        contact.birthDate = new Date(contact.birthDate);
      }
      return contact;
    });

    return sanitizedContacts;
  }

  function displayBirthDate(birthDate?: string | Date) {
    if (!birthDate) {
      return "No birth date";
    }
    if (!(birthDate instanceof Date)) {
      birthDate = new Date(birthDate);
    }
    return birthDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function renderContacts(contacts: Contact[]) {
    const urlParamsString = new URLSearchParams(window.location.search);
    const query = urlParamsString.get("q");

    const contactsToRender = query
      ? searchContactByKeyword(contacts, query)
      : contacts;

    const contactsCountElement = document.getElementById("contacts-count");
    if (!contactsCountElement) return;

    contactsCountElement.innerHTML = `${contactsToRender.length} ${
      contactsToRender.length > 1 ? "contacts" : "contact"
    }`;

    const contactsListContainerElement =
      document.getElementById("contacts-list");
    if (!contactsListContainerElement) return;

    contactsListContainerElement.innerHTML = `
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Birth Date</th>
          <th>Notes</th>
          <th>Address</th>
          <th>Labels</th>
        </tr>
      </thead>
      <tbody>
        ${contactsToRender
          .map(
            (contact) => `
            <tr class="border-b border-gray-200 odd:bg-white even:bg-slate-100">
              <td>${contact.fullName}</td>
              <td>${contact.email}</td>
              <td>${contact.phoneNumber}</td>
              <td>${displayBirthDate(contact.birthDate)}</td>
              <td>${contact.notes ? contact.notes : ""}</td>
              <td>${
                contact.address
                  ? `${contact.address.street}, ${contact.address.city}, ${contact.address.state}, ${contact.address.country}`
                  : ""
              }</td>
              <td>${
                contact.labels
                  ? contact.labels
                      .map(
                        (label) =>
                          `<span class="text-${label.color}-700">${label.name}</span>`
                      )
                      .join(", ")
                  : ""
              }</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    `;
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
  }

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

  function searchContactByKeyword(contacts: Contact[], keyword: string) {
    const lowerInputKeyword = keyword.toLowerCase();

    const foundContacts = contacts.filter(
      (contact) =>
        contact.fullName.toLowerCase().includes(lowerInputKeyword) ||
        contact.email?.toLowerCase().includes(lowerInputKeyword) ||
        contact.phoneNumber?.toLowerCase().includes(lowerInputKeyword) ||
        contact.notes?.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.street?.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.city?.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.state?.toLowerCase().includes(lowerInputKeyword) ||
        contact.address?.country?.toLowerCase().includes(lowerInputKeyword)
    );

    if (foundContacts.length <= 0) {
      return [];
    }

    return foundContacts;
  }

  function deleteContactById(contacts: Contact[]) {
    const inputId = prompt("Enter contact ID to delete:");

    if (!inputId) {
      console.info("Please enter ID");
      return null;
    }

    const id = parseInt(inputId);

    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    dataContacts = updatedContacts;

    console.info(`Contact with ID '${id}' has been deleted`);
  }

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

  function sortContactsByName(contacts: Contact[]) {
    const sortedContacts = contacts.sort((previousContact, nextContact) => {
      if (previousContact.fullName > nextContact.fullName) return 1;
      if (previousContact.fullName < nextContact.fullName) return -1;
      return 0;
    });

    renderContacts(sortedContacts);
  }

  function handleSubmitAddNewContactForm(event: Event) {
    event.preventDefault();

    const eventTarget = event.target as HTMLFormElement;

    const formData = new FormData(eventTarget);

    const birthDateValue = formData.get("birth-date");

    const newContactData: CreateContactData = {
      fullName: String(formData.get("full-name")),
      email: formData.get("email")?.toString(),
      phoneNumber: formData.get("phone-number")?.toString(),
      birthDate: birthDateValue
        ? new Date(String(formData.get("birth-date")))
        : undefined,
      notes: formData.get("notes")?.toString(),
      address: {
        street: formData.get("address-street")?.toString() || "",
        city: formData.get("address-city")?.toString() || "",
        state: formData.get("address-state")?.toString() || "",
        postalCode: formData.get("address-postal-code")?.toString() || "",
        country: formData.get("address-country")?.toString() || "",
      },
      labels: formData
        .get("labels")
        ?.toString()
        .split(",")
        .map((label) => {
          return { name: label, color: "blue" };
        }),
    };

    const newContact: Contact = {
      id: dataContacts.length
        ? Math.max(...dataContacts.map((contact) => contact.id)) + 1
        : 1,
      ...newContactData,
    };

    dataContacts.push(newContact);
    save(dataContacts);
    eventTarget.reset();
  }

  const addNewContactForm = document.getElementById(
    "contactForm"
  ) as HTMLFormElement | null;

  function main() {
    const contacts = load();
    dataContacts = contacts;

    renderContacts(contacts);

    if (addNewContactForm) {
      addNewContactForm.addEventListener(
        "submit",
        handleSubmitAddNewContactForm
      );
    }
  }

  main();
})();
