document.addEventListener('DOMContentLoaded', () => {
    const adminUsername = 'admin';
    const adminPassword = '221099';
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const mainContainer = document.getElementById('main-container');
    const userMenu = document.getElementById('user-menu');
    const userLogo = document.getElementById('user-logo');
    const addRecordBtn = document.getElementById('add-record-btn');
    const recordFormContainer = document.getElementById('record-form-container');
    const recordForm = document.getElementById('record-form');
    const cancelBtn = document.getElementById('cancel-btn');
    const recordsTableBody = document.querySelector('#records-table tbody');
    const loginError = document.getElementById('login-error');
    let currentAction = '';

    // Manejo del formulario de inicio de sesión
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

    // Mostrar el menú del usuario al hacer clic en el logo
    userLogo.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });

    // Mostrar el formulario para crear un nuevo registro
    addRecordBtn.addEventListener('click', () => {
        recordFormContainer.classList.remove('hidden');
    });

    // Ocultar el formulario de registro
    cancelBtn.addEventListener('click', () => {
        recordFormContainer.classList.add('hidden');
        recordForm.reset(); // Limpiar el formulario
    });

    // Manejo del formulario de registro
    recordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('record-name').value;
        const age = document.getElementById('record-age').value;
        const paid = document.getElementById('record-paid').value;
        const treatment = document.getElementById('record-treatment').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${paid}</td>
            <td>${treatment}</td>
        `;
        recordsTableBody.appendChild(row);

        recordFormContainer.classList.add('hidden');
        recordForm.reset(); // Limpiar el formulario
    });
});
