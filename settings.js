document.addEventListener("DOMContentLoaded", loadContacts);

function addContact() {
    let input = document.getElementById("contact-input").value.trim();
    if (!input) {
        alert("Please enter a valid phone number.");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
    
    // Prevent duplicate numbers
    if (contacts.includes(input)) {
        alert("This number is already saved!");
        return;
    }

    contacts.push(input);
    localStorage.setItem("emergencyContacts", JSON.stringify(contacts));

    document.getElementById("contact-input").value = "";
    loadContacts();
}

function loadContacts() {
    let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
    let list = document.getElementById("contact-list");

    list.innerHTML = "";
    contacts.forEach((contact, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${contact} <button onclick="removeContact(${index})">Remove</button>`;
        list.appendChild(li);
    });
}

function removeContact(index) {
    let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
    contacts.splice(index, 1);
    localStorage.setItem("emergencyContacts", JSON.stringify(contacts));
    loadContacts();
}

function clearContacts() {
    localStorage.removeItem("emergencyContacts");
    loadContacts();
}
