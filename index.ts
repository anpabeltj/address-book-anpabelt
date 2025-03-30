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

  function displayAvatarImageUrl(contact: Contact) {
    if (!contact.avatarUrl) {
      return `https://api.dicebear.com/9.x/initials/svg?seed=${contact.fullName}`;
    }
    return contact.avatarUrl;
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
      ${contactsToRender
        .map(
          (contact) => `
          <tr class="border-b border-gray-500 odd:bg-white even:bg-slate-100 border-collapse">
            <td class="flex items-center justify-center py-16">
             <img src="${displayAvatarImageUrl(
               contact
             )}" class="w-8 h-8 rounded-full" />
            </td>
            <td class="border border-gray-500 py-4 px-8">${
              contact.fullName
            }</td>
            <td class="border border-gray-500 py-4 px-8">${contact.email}</td>
            <td class="border border-gray-500 py-4 px-8">${
              contact.phoneNumber
            }</td>
            <td class="border border-gray-500 py-4 px-8">${displayBirthDate(
              contact.birthDate
            )}</td>
            <td class="border border-gray-500 py-4 px-8">${
              contact.notes ? contact.notes : ""
            }</td>
            <td class="border border-gray-500 py-4 px-8">${
              contact.address
                ? `${contact.address.street}, ${contact.address.city}, ${contact.address.state}, ${contact.address.country}`
                : ""
            }</td>
            <td class="border border-gray-500 py-4 px-8">${
              contact.labels
                ? contact.labels
                    .map(
                      (label) =>
                        `<span class="text-${label.color}-700">${label.name}</span>`
                    )
                    .join(", ")
                : ""
            }</td>
            <td class="border border-gray-500 py-4 px-8">
              <a href="/contact/?id=${contact.id}">View</a>
              <a href="#" onclick="deleteContact('${
                contact.id
              }'); return false;">Delete</a>
            </td>
            
          </tr>
        `
        )
        .join("")}
    `;
  }

  function renderContactById(contacts: Contact[], element: HTMLElement) {
    const urlParamsString = new URLSearchParams(window.location.search);
    const id = Number(urlParamsString.get("id"));

    const contact = contacts.find((contact) => contact.id === id);
    if (!contact) return null;

    const contactDetailsContainerElement =
      document.getElementById("contact-details");
    if (!contactDetailsContainerElement) return;

    contactDetailsContainerElement.innerHTML = `
      <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div class="flex items-center justify-between border-b pb-4 mb-6">
        <h2 class="text-2xl font-bold text-gray-800">${contact.fullName}</h2>
        <a href="/contact/edit/?id=${
          contact.id
        }" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">Edit</a>
      </div>

      <div class="flex items-start space-x-6 mb-8">
        <img src="${displayAvatarImageUrl(
          contact
        )}" class="w-24 h-24 rounded-full shadow-lg" />
        <div class="space-y-2">
        <p class="text-gray-600"><span class="font-medium">Email:</span> ${
          contact.email
        }</p>
        <p class="text-gray-600"><span class="font-medium">Phone:</span> ${
          contact.phoneNumber
        }</p>
        <p class="text-gray-600"><span class="font-medium">Birthday:</span> ${displayBirthDate(
          contact.birthDate
        )}</p>
        </div>
      </div>
      
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Notes</h3>
        <p class="text-gray-600 bg-gray-50 p-4 rounded-md">${
          contact.notes || "No notes available"
        }</p>
      </div>
      
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Address</h3>
        <p class="text-gray-600 bg-gray-50 p-4 rounded-md">
        ${
          contact.address
            ? `${contact.address.street}, ${contact.address.city}, ${contact.address.state}, ${contact.address.country}`
            : "No address available"
        }
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Labels</h3>
        <div class="flex flex-wrap gap-2">
        ${
          contact?.labels
            ? contact.labels
                .map(
                  (label) =>
                    `<span class="px-3 py-1 rounded-full text-sm bg-${label.color}-100 text-${label.color}-700">${label.name}</span>`
                )
                .join("")
            : "No labels"
        }
        </div>
      </div>
      </div>
    `;
  }

  function renderEditContactById(
    contacts: Contact[],
    formElement: HTMLFormElement
  ) {
    const urlParamsString = new URLSearchParams(window.location.search);
    const id = Number(urlParamsString.get("id"));

    console.log({ id });

    const contact = contacts.find((contact) => contact.id === id);
    if (!contact) return null;

    console.log({ contact });

    /**
     * Refactor to use this strategy:
     * https://github.com/mhaidarhanif/address-book/blob/main/contact/index.js
     */

    // Map contact properties to form field IDs
    const fieldMappings = {
      "full-name": contact.fullName,
      email: contact.email,
      "phone-number": contact.phoneNumber,
      notes: contact.notes,
    };

    // Handle birth date specially due to format requirements
    if (contact.birthDate) {
      const birthDateInput = formElement.querySelector(
        "#birth-date"
      ) as HTMLInputElement;
      if (birthDateInput) {
        const date = new Date(contact.birthDate);
        const formattedDate = date.toISOString().split("T")[0];
        birthDateInput.value = formattedDate;
      }
    }

    // Handle labels specially due to format requirements
    if (contact.labels && contact.labels.length > 0) {
      const labelsInput = formElement.querySelector(
        "#labels"
      ) as HTMLInputElement;
      if (labelsInput) {
        const labelNames = contact.labels.map((label) => label.name);
        labelsInput.value = labelNames.join(",");
      }
    }

    // Set all simple field values
    Object.entries(fieldMappings).forEach(([fieldId, value]) => {
      if (value) {
        const input = formElement.querySelector(`#${fieldId}`) as
          | HTMLInputElement
          | HTMLTextAreaElement;
        if (input) input.value = value;
      }
    });

    // Handle address fields
    if (contact.address) {
      const addressMappings = {
        "address-street": contact.address.street,
        "address-city": contact.address.city,
        "address-state": contact.address.state,
        "address-postal-code": contact.address.postalCode,
        "address-country": contact.address.country,
      };

      Object.entries(addressMappings).forEach(([fieldId, value]) => {
        if (value) {
          const input = formElement.querySelector(
            `#${fieldId}`
          ) as HTMLInputElement;
          if (input) input.value = value;
        }
      });
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

    window.location.href = `/contact/?id=${newContact.id}`;
  }

  // Delete contact function logic using an inline click event
  function deleteContact(contactId: string): void {
    const confirmation = window.confirm(
      "Are you sure you want to delete this contact?\n\nThis action cannot be undone and the contact will be permanently removed from your contacts list."
    );
    if (!confirmation) return;

    // Remove the contact from the global contacts array
    dataContacts = dataContacts.filter(
      (contact) => contact.id !== parseInt(contactId)
    );

    // Save the updated contacts to localStorage
    save(dataContacts);

    // Re-render the contacts list with the updated array
    renderContacts(dataContacts);

    // Display a notification that the contact was deleted
    alert(
      "Contact deletion complete! The selected contact has been removed from your contacts list."
    );
  }

  // Make sure the deleteContact function is globally accessible
  (window as any).deleteContact = deleteContact;

  // Example initial render call on page load
  document.addEventListener("DOMContentLoaded", () => {
    renderContacts(dataContacts);
  });

  const addNewContactForm = document.getElementById(
    "contact-form"
  ) as HTMLFormElement | null;

  const contactDetailsElement = document.getElementById(
    "contact-details"
  ) as HTMLElement | null;

  const editContactFormElement = document.getElementById(
    "edit-contact-form"
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

    if (contactDetailsElement) {
      renderContactById(contacts, contactDetailsElement);
    }

    if (editContactFormElement) {
      renderEditContactById(contacts, editContactFormElement);
    }
  }

  main();
})();
