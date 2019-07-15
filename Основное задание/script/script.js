"use strict";

const start = document.getElementById('start'); // кнопка "рассчитать"
const cancel = document.querySelector('#cancel'); // кнопка "сбросить"

const plusBtns = document.getElementsByTagName('button'); // кнопка добавления полей ввода
const incomePlus = plusBtns[0]; // первая кнопка добавления
const expensesPlus = plusBtns[1]; // вторая кнопка добавления (Обязательные расходы)

const depositCheck = document.querySelector('#deposit-check'); // чекбокс для депозита

// Поля вывода
const budgetDayValue = document.querySelectorAll('.budget_day-value')[0],
			budgetMonthValue = document.querySelectorAll('.budget_month-value')[0],
			expensesMonthValue = document.querySelectorAll('.expenses_month-value')[0],
			accumulatedMonthValue = document.querySelectorAll('.accumulated_month-value')[0],
			additionalIncomeValue = document.querySelectorAll('.additional_income-value')[0],
			additionalExpensesValue = document.querySelectorAll('.additional_expenses-value')[0],
			incomePeriodValue = document.querySelectorAll('.income_period-value')[0],
			targetMonthValue = document.querySelectorAll('.target_month-value')[0];

// Поля ввода
const salaryAmount = document.querySelector('.salary-amount'),
			incomeTitle = document.querySelector('.income-title'),
			incomeItems = document.querySelectorAll('.income-items'),
			additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
			expensesTitle = document.querySelector('.expenses-title'),
			expensesItems = document.querySelectorAll('.expenses-items'),
			additionalExpenses = document.querySelector('.additional_expenses-item'),
			targetAmount = document.querySelector('.target-amount'),
			periodSelect = document.querySelector('.period-select'),
			periodAmount = document.querySelector('.period-amount'),
			depositBank = document.querySelector('.deposit-bank'),
			depositAmount = document.querySelector('.deposit-amount'),
			depositPercent = document.querySelector('.deposit-percent');


//--- Главный объект приложения ------------------------------------------------------------------------//

class appData {
	constructor() {
		this.income = {};
		this.incomeMonth = 0;
		this.addIncome = [];
		this.expenses = {};
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
		this.period = 12;
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.expensesMonth = 0;
	}
	
	start = () => {
		if(salaryAmount.value === '') {
			return;
		}

		this.budget = +salaryAmount.value;

		this.getExpenses();
		this.getIncome();
		this.getExpensesMonth();
		this.getInfoDeposit();
		this.getAddExpenses();
		this.getAddIncome();
		this.getBudget();
	
		this.showResult();
		
		// Переводим все поля ввода в режим "отключено" (disabled)
		let allClientInputs = document.querySelectorAll('.data input[type=text]');
		allClientInputs.forEach((item) => {
			item.setAttribute('disabled', 'disabled');
		});

		// Отображение кнопки "сбросить"
		start.style.display = 'none';
		cancel.style.display = 'block';	
	}
	showResult() {
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = this.budgetDay;
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = this.getTargetMonth();
		incomePeriodValue.value = this.calcPeriod();

		// Пересчет накоплений за период при его изменении
		periodSelect.addEventListener('input', () => {
			incomePeriodValue.value = this.calcPeriod();
		});
	}
	getExpensesMonth() { // Расходы за месяц

		for(let key in this.expenses) {
			this.expensesMonth += Number(this.expenses[key]);
		}
		console.log('Расходы за месяц: ', this.expensesMonth);
		
	}
	getBudget() {  
		// Накопления за месяц (Доходы - расходы) (getAccumulatedMonth - старое название функции, замена названия требуется в 8 пункте)
		this.budgetMonth = Number(this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12);
		this.budgetDay = Math.floor((this.budget - this.expensesMonth) / 30);
	}
	getTargetMonth() {  // Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
		let months = Math.ceil(Number(targetAmount.value) / Number(this.budgetMonth));

		if(months < 0) {
			console.log("Цель не будет достигнута");
		} else {
			console.log("Цель будет достигнута через ", months, " месяц(ев)");
		}
		return months;
	}
	getStatusIncome() {  // Проверка на уровень дохода
		if(this.budgetDay > 800) {

			console.log("Высокий уровень дохода!");
		
		} else if(this.budgetDay > 300 && budgetDay < 800) {
		
			console.log("Средний уровень дохода!");
		
		} else if(this.budgetDay > 0 && budgetDay < 300) {
		
			console.log("Низкий уровень дохода!");
		
		} else if(this.budgetDay < 0) {
		
			console.log("Что-то пошло не так...");
		
		} else if(this.budgetDay === 800) {
		
			console.log("Почти высокий уровень дохода!");
		
		} else if(this.budgetDay === 300) {
		
			console.log("Почти средний уровень дохода!");
		
		} else {

			console.log("Дохода нет!");

		}
	}
	// addExpensesBlock = () => {
	// 	let cloneExpensesItem = expensesItems[0].cloneNode(true);
	// 	cloneExpensesItem.querySelectorAll('input').forEach((item) => item.value = ''); 
	// 	// Очищаем значения заполненных полей ввода, чтобы они не копировались
	// 	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

	// 	expensesItems = document.querySelectorAll('.expenses-items');

	// 	cloneExpensesItem.children[0].addEventListener('input', this.checkContentText); // <-- TEST
	// 	cloneExpensesItem.children[1].addEventListener('input', this.checkContentNumbers); // <-- TEST
		
	// 	if(expensesItems.length === 3) {
	// 		expensesPlus.style.display = 'none';
	// 	}
	// }
	// addIncomeBlock = () => {
	// 	let cloneIncomeItem = incomeItems[0].cloneNode(true);
	// 	cloneIncomeItem.querySelectorAll('input').forEach((item) => item.value = ''); 
	// 	// Очищаем значения заполненных полей ввода, чтобы они не копировались
	// 	incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

	// 	incomeItems = document.querySelectorAll('.income-items');

	// 	cloneIncomeItem.children[0].addEventListener('input', this.checkContentText); // <-- TEST
	// 	cloneIncomeItem.children[1].addEventListener('input', this.checkContentNumbers); // <-- TEST

	// 	if(incomeItems.length === 3) {
	// 		incomePlus.style.display = 'none';
	// 	}
	// }
	addNewBlock = (nodeList, plusBtn) => {
		let cloneItem = nodeList[0].cloneNode(true);
		cloneItem.querySelectorAll('input').forEach((item) => item.value = '');
		// Очищаем значения заполненных полей ввода, чтобы они не копировались
		nodeList[0].parentNode.insertBefore(cloneItem, plusBtn);

		cloneItem.children[0].addEventListener('input', this.checkContentText);
		cloneItem.children[1].addEventListener('input', this.checkContentNumbers);

		if(nodeList.length === 2) {
			expensesPlus.style.display = 'none';
		}
	}
	getExpenses() {
		expensesItems.forEach((item) => {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;

			if(itemExpenses !== '' && cashExpenses !== '') {
					this.expenses[itemExpenses] = cashExpenses;
			}
		});
	}
	getIncome() {
		incomeItems.forEach((item) => {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;

			if(itemIncome !== '' && cashIncome !== '') {
				this.income[itemIncome] = cashIncome;
			}
		});
		
		for(let key in this.income) {
			this.incomeMonth += +this.income[key];
		}
	}
	getAddExpenses() {
		let addExpenses = additionalExpenses.value.split(',');
		addExpenses.forEach((item) => {
			item = item.trim();
			if(item !== '') {
				this.addExpenses.push(item);
			}
		});
	}
	getAddIncome() {
		additionalIncomeItems.forEach((item) => {
			let itemValue = item.value.trim();
			if(itemValue !== '') {
				this.addIncome.push(itemValue);
			}
		});
	}
	getRangeValue() {
		periodAmount.innerText = periodSelect.value;
	}
	getInfoDeposit = () => {
		if(this.deposit) {
			this.percentDeposit = depositPercent.value;
			this.moneyDeposit = depositAmount.value;
		}
	}
	calcPeriod() {
		return this.budgetMonth * periodSelect.value;
	}
	// Вспомогательная функция для reset
	clear(arr) {
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] !== undefined) {
				arr[i].value = '';
			}
		}
	}
	// Вспомогательная функция для reset
	unsetDisableMode(arr) {
		for(let i = 0; i < arr.length; i++) {
			arr[i].removeAttribute("disabled");
		}
	}
	reset = () => {
		let inputs = document.querySelectorAll("input[type='text']");
		this.clear(inputs);
		this.unsetDisableMode(inputs);
		periodSelect.value = '1';
		periodAmount.textContent = '1';
		
		this.income = {};
		this.incomeMonth = 0;
		this.addIncome = [];
		this.expenses = {};
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
		this.period = 12;
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.expensesMonth = 0;

		start.style.display = 'block';
		cancel.style.display = 'none';
	}
	// Валидация контента, который вводит пользователь в поля ввода
	checkContentText() {
		let matchValue = /\w/;
		let matchIndex = this.value.search(matchValue);
		if(matchIndex !== -1) {
			this.value = this.value.substr(0, matchIndex);
		}
	}
	checkContentNumbers() {
		let matchValue = /\D/;
		let matchIndex = this.value.search(matchValue);
		if(matchIndex !== -1) {
			this.value = this.value.substr(0, matchIndex);
		}
	}
	checkDeposit = () => { // Работа с полями "Депозит"
		if(depositCheck.checked) {
			depositBank.style.display = 'inline-block';
			depositAmount.style.display = 'inline-block';
			this.deposit = 'true';
			depositBank.addEventListener('change', function() {
				let selectIndex = this.options[this.selectedIndex].value;
				depositPercent.style.display = 'none';
				if(selectIndex === 'other') {
					depositPercent.style.display = 'inline-block';
					depositPercent.removeAttribute('disabled');
					depositPercent.value = '';
				} else {
					depositPercent.style.display = 'none';
					depositPercent.value = selectIndex;
				}
			});
		} else {
			depositBank.style.display = 'none';
			depositAmount.style.display = 'none';
			depositAmount.value = '';
			this.deposit = 'false';
		}
	}
	eventsListeners = () => {
		// Запуск программы по клику на кнопку "Рассчитать"
		start.addEventListener('click', this.start);

		// Обработчик на клик по кнопке добавления колонки расходов
		expensesPlus.addEventListener('click', () => {
			this.addNewBlock(expensesItems, expensesPlus);
			expensesItems = document.querySelectorAll('.expenses-items');
		});

		// Обработчик на клик по кнопке добавления колонки доходов
		incomePlus.addEventListener('click', () => {
			this.addNewBlock(incomeItems, incomePlus);
			incomeItems = document.querySelectorAll('.income-items');
		});

		// Обработчик по клику на checkbox депозит
		depositCheck.addEventListener('click', this.checkDeposit);

		// Валидация контента, который вводит пользователь в поля ввода
		document.querySelectorAll('input[placeholder="Наименование"]').forEach(input => {
			input.addEventListener('input', this.checkContentText);
		});

		document.querySelectorAll('input[placeholder="Сумма"]').forEach(input => {
			input.addEventListener('input', this.checkContentNumbers);
		});

		// Отображение значения ползунка периода
		periodSelect.addEventListener('input', this.getRangeValue);

		// Перезапуск программы по клику на кнопку "Сбросить"
		cancel.addEventListener('click', this.reset);
	}
};

const application = new appData();

application.eventsListeners();
