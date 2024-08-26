document.addEventListener('DOMContentLoaded', () => {
    const recordForm = document.getElementById('record-form');
    const recordsTableBody = document.querySelector('#records-table tbody');

    // Manejo del formulario de registro
    recordForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const paid = document.getElementById('paid').value;
        const treatment = document.getElementById('treatment').value;

        // Crear una nueva fila en la tabla
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${paid}</td>
            <td>${treatment}</td>
        `;
        recordsTableBody.appendChild(row);

        // Limpiar el formulario
        recordForm.reset();
    });
});
