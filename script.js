const form = document.getElementById('contact-form');
const contactItemsDiv = document.getElementById('contact-items');

// Sample contact items array
let contactItems = [];

// Create a new contact item
function createContactItem(name, email, number) {
  return { name, email, number, id: Date.now() };
}

// Render contact items to the DOM
function renderContactItems() {
  contactItemsDiv.innerHTML = '';
  contactItems.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.email}</p>
      <p>${item.number}</p>
      <button onclick="deleteContactItem(${item.id})">Deletar</button>
      <button onclick="updateContactItem(${item.id})">Alterar</button>
    `;
    contactItemsDiv.appendChild(div);
  });
}

// Add a new contact item
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const newContact = createContactItem(name, email, number);
  contactItems.push(newContact);
  renderContactItems();
  form.reset();
});

// Delete a contact item
function deleteContactItem(id) {
  contactItems = contactItems.filter(item => item.id!== id);
  renderContactItems();
}

