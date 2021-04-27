const Modal = {
	open() {
		// Abrir Modal
		// Adicionar a classe active ao Modal
		document.getElementById('modal-ls').classList.add('active');
	},
	close() {
		// Fechar o Modal
		//Remover a classe active do Modal
		document.querySelector('.modal-overlay').classList.remove('active');
	},
};

const transactions = [
	{ id: 1, description: 'Luz', amount: -50000, date: '09/04/2021' },
	{ id: 2, description: 'Criação website', amount: 500000, date: '09/04/2021' },
	{ id: 3, description: 'Internet', amount: -20000, date: '09/04/2021' },
];

// Eu preciso somar as entradas
// depois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total

const Transaction = {
	incomes() {
		// somar as entradas
	},
	expenses() {
		// somar as saídas
	},
	total() {
		// entradas - saídas
	},
};

// Substituir os dados do HTML com os dados do JS

const DOM = {
	transactionsContainer: document.querySelector('#data-table tbody tr'),

	addTransaction(transaction, index) {
		const tr = document.createElement('tr');
		tr.innerHTML = DOM.innerHTMLTransaction(transaction);
		console.log(tr.innerHTML);

		DOM.transactionsContainer.appendChild(tr.innerHTML);
	},
	innerHTMLTransaction(transaction) {
		const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}}</td>
            <td>${transaction.date}</td>
            <td>
              <img src="./assets/minus.jpg" width="35px" alt="Remover transação">
            </td>
    `;

		return html;
	},
};

DOM.addTransaction(transactions[2]);
