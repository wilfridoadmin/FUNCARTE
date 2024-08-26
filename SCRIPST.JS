document.addEventListener('DOMContentLoaded', () => {
    const adminUsername = 'wilfridoadmin';
    const adminPassword = 'wiljaja22';
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const mainContainer = document.getElementById('main-container');
    const userFormContainer = document.getElementById('user-form-container');
    const userTableBody = document.querySelector('#user-table tbody');
    const loginError = document.getElementById('login-error');
    const addUserBtn = document.getElementById('add-user-btn');
    const deleteUserBtn = document.getElementById('delete-user-btn');
    const createUserBtn = document.getElementById('create-user-btn');
    const userForm = document.getElementById('user-form');
    const cancelBtn = document.getElementById('cancel-btn');
    let currentAction = '';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === adminUsername && password === adminPassword) {
            loginContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos.';
        }
    });

    function showUserForm(action) {
        currentAction = action;
        userFormContainer.classList.remove('hidden');
        userFormContainer.querySelector('#form-title').textContent = action === 'add' ? 'Agregar Usuario' : 'Editar Usuario';
    }

    function hideUserForm() {
        userFormContainer.classList.add('hidden');
    }

    addUserBtn.addEventListener('click', () => showUserForm('add'));
    createUserBtn.addEventListener('click', () => showUserForm('create'));
    cancelBtn.addEventListener('click', hideUserForm);

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = document.getElementById('user-name').value;
        const userAge = document.getElementById('user-age').value;
        const userMatricula = document.getElementById('user-matricula').value;

        if (currentAction === 'add' || currentAction === 'create') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${userName}</td>
                <td>${userAge}</td>
                <td>${userMatricula}</td>
            `;
            userTableBody.appendChild(row);
        } else if (currentAction === 'edit') {
            // Logic to edit a user can be implemented here
        }

        hideUserForm();
    });

    deleteUserBtn.addEventListener('click', () => {
        const rows = userTableBody.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.querySelector('input[type="checkbox"]').checked) {
                row.remove();
            }
        });
    });
});
