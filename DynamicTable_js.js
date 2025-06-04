function addRow() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '') {
    alert('Please enter both Name and Email.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  nameCell.textContent = name;

  const emailCell = newRow.insertCell(1);
  emailCell.textContent = email;

  const actionCell = newRow.insertCell(2);
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'btn btn-danger btn-sm';
  deleteBtn.onclick = function () {
    newRow.remove();
  };
  actionCell.appendChild(deleteBtn);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}