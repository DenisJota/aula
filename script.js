const form = document.getElementById('agenda-form');
const agendaItemsDiv = document.getElementById('agenda-items');

// Sample agenda items array
let agendaItems = [];

// Create a new agenda item
function createAgendaItem(title, description, dueDate) {
  return { title, description, dueDate, id: Date.now() };
}

// Render agenda items to the DOM
function renderAgendaItems() {
  agendaItemsDiv.innerHTML = '';
  agendaItems.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <p>${item.dueDate}</p>
      <button onclick="deleteAgendaItem(${item.id})">Delete</button>
    `;
    agendaItemsDiv.appendChild(div);
  });
}

// Add a new agenda item
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const newItem = createAgendaItem(title, description, dueDate);
  agendaItems.push(newItem);
  renderAgendaItems();
  form.reset();
});

// Delete an agenda item
function deleteAgendaItem(id) {
  agendaItems = agendaItems.filter(item => item.id!== id);
  renderAgendaItems();
}