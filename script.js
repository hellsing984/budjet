
function updateTotal() {
    let totalIncome = 0;
    let totalExpense = 0;

    document.querySelectorAll('.income').forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            totalIncome += value;
        }
    });

    document.querySelectorAll('.expense').forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            totalExpense += value;
        }
    });

    const balance = totalIncome - totalExpense;

    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = balance.toFixed(2);
    balanceElement.className = balance >= 0 ? 'positive' : 'negative';
}

document.querySelector('.add-row').addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="text" placeholder="Libellé"></td>
        <td><input type="text" class="income" placeholder="0.00" oninput="updateTotal()"></td>
        <td><input type="text" class="expense" placeholder="0.00" oninput="updateTotal()"></td>
        <td class="delete-row" onclick="deleteRow(this)">Supprimer</td>
    `;

    tbody.appendChild(row);
});
/* bouton*/
function deleteRow(button) {
    const row = button.parentElement;
    row.remove();
    updateTotal();
}