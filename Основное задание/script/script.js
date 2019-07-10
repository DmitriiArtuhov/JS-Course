"use strict";

let start = document.getElementById('start'); // кнопка "рассчитать"
let cancel = document.querySelector('#cancel'); // кнопка "сбросить"

const plusBtns = document.getElementsByTagName('button'); // кнопка добавления полей ввода
const incomePlus = plusBtns[0]; // первая кнопка добавления
const expensesPlus = plusBtns[1]; // вторая кнопка добавления (Обязательные расходы)

const checkBox = document.querySelector('#deposit-check'); // чекбокс для депозита

// Поля вывода
let budgetDayValue = document.querySelectorAll('.budget_day-value')[0];
let budgetMonthValue = document.querySelectorAll('.budget_month-value')[0];
let expensesMonthValue = document.querySelectorAll('.expenses_month-value')[0];
let accumulatedMonthValue = document.querySelectorAll('.accumulated_month-value')[0];
let additionalIncomeValue = document.querySelectorAll('.additional_income-value')[0];
let additionalExpensesValue = document.querySelectorAll('.additional_expenses-value')[0];
let incomePeriodValue = document.querySelectorAll('.income_period-value')[0];
let targetMonthValue = document.querySelectorAll('.target_month-value')[0];

// Поля ввода
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
// let incomeAmount = document.querySelector('.income-amount');
let incomeItems = document.querySelectorAll('.income-items');
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
// let expensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpenses = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');


//--- Главный объект приложения ------------------------------------------------------------------------//

let question1,
		question2;

let appData = {
	income: {},
	incomeMonth: 0,
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	period: 12,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	start: function() {
		if(salaryAmount.value === '') {
			return;
		}

		appData.budget = +salaryAmount.value;

		appData.getExpenses()
		appData.getIncome();
		appData.getExpensesMonth();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getBudget();
	
		appData.showResult();
		
		// Переводим все поля ввода в режим "отключено" (disabled)
		let allClientInputs = document.querySelectorAll('.data input[type=text]');
		allClientInputs.forEach((item) => {
			item.setAttribute('disabled', 'disabled');
		});

		// Отображение кнопки "сбросить"
		start.style.display = 'none';
		cancel.style.display = 'block';	
	},
	showResult: function() {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
		additionalIncomeValue.value = appData.addIncome.join(', ');
		targetMonthValue.value = appData.getTargetMonth();
		incomePeriodValue.value = appData.calcPeriod();

		// Пересчет накоплений за период при его изменении
		periodSelect.addEventListener('input', () => {
			incomePeriodValue.value = appData.calcPeriod();
		});
	},
	getExpensesMonth: function() { // Расходы за месяц

		for(let key in appData.expenses) {
			appData.expensesMonth += Number(appData.expenses[key]);
		}
		console.log('Расходы за месяц: ', appData.expensesMonth);
		
	},
	getBudget: function() {  // Накопления за месяц (Доходы - расходы) (getAccumulatedMonth - старое название функции, замена названия требуется в 8 пункте)
		appData.budgetMonth = Number(appData.budget + appData.incomeMonth - appData.expensesMonth);
		appData.budgetDay = Math.floor((appData.budget - appData.expensesMonth) / 30);
	},
	getTargetMonth: function() {  // Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
		let months = Math.ceil(Number(targetAmount.value) / Number(appData.budgetMonth));

		if(months < 0) {
			console.log("Цель не будет достигнута");
		} else {
			console.log("Цель будет достигнута через ", months, " месяц(ев)");
		}
		return months;
	},
	getStatusIncome: function() {  // Проверка на уровень дохода
		if(appData.budgetDay > 800) {

			console.log("Высокий уровень дохода!");
		
		} else if(appData.budgetDay > 300 && budgetDay < 800) {
		
			console.log("Средний уровень дохода!");
		
		} else if(appData.budgetDay > 0 && budgetDay < 300) {
		
			console.log("Низкий уровень дохода!");
		
		} else if(appData.budgetDay < 0) {
		
			console.log("Что-то пошло не так...");
		
		} else if(appData.budgetDay === 800) {
		
			console.log("Почти высокий уровень дохода!");
		
		} else if(appData.budgetDay === 300) {
		
			console.log("Почти средний уровень дохода!");
		
		} else {

			console.log("Дохода нет!");

		}
	},
	addExpensesBlock: function() {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		cloneExpensesItem.querySelectorAll('input').forEach((item) => item.value = ''); // Очищаем значения заполненных полей ввода, чтобы они не копировались
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

		expensesItems = document.querySelectorAll('.expenses-items');
		
		if(expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}
	},
	addIncomeBlock: function() {
		let cloneIncomeItem = incomeItems[0].cloneNode(true);
		cloneIncomeItem.querySelectorAll('input').forEach((item) => item.value = ''); // Очищаем значения заполненных полей ввода, чтобы они не копировались
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

		incomeItems = document.querySelectorAll('.income-items');

		if(incomeItems.length === 3) {
			incomePlus.style.display = 'none';
		}
	},
	getExpenses: function() {
		expensesItems.forEach((item) => {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;

			if(itemExpenses !== '' && cashExpenses !== '') {
					appData.expenses[itemExpenses] = cashExpenses;
			}
		});
	},
	getIncome: function() {
		incomeItems.forEach((item) => {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;

			if(itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome] = cashIncome;
			}
		});
		
		for(let key in appData.income) {
			appData.incomeMonth += +appData.income[key];
		}
	},
	getAddExpenses: function() {
		let addExpenses = additionalExpenses.value.split(',');
		addExpenses.forEach((item) => {
			item = item.trim();
			if(item !== '') {
				appData.addExpenses.push(item);
			}
		});
	},
	getAddIncome: function() {
		additionalIncomeItems.forEach((item) => {
			let itemValue = item.value.trim();
			if(itemValue !== '') {
				appData.addIncome.push(itemValue);
			}
		});
	},
	getRangeValue: function() {
		periodAmount.innerText = periodSelect.value;
	},
	getInfoDeposit: function() {
		if(appData.deposit) {
			appData.percentDeposit = +prompt('Какой годовой процент депозита?', 10);
			while(isNaN(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit === '')  {
				appData.percentDeposit = +prompt('Какой годовой процент депозита? (Введите валидные данные)', 10);
			}

			appData.moneyDeposit = +prompt('Какая сумма заложена в депозите?', 10000);
			while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit === '')  {
				appData.moneyDeposit = +prompt('Какая сумма заложена в депозите? (Введите валидные данные)', 10000);
			}
		}
	},
	calcPeriod: function() {
		return appData.budgetMonth * periodSelect.value;
	}
};

// Запуск программы по клику на кнопку "Рассчитать"
start.addEventListener('click', appData.start);

// Обработчик на клик по кнопке добавления колонки расходов
expensesPlus.addEventListener('click', appData.addExpensesBlock);

// Обработчик на клик по кнопке добавления колонки доходов
incomePlus.addEventListener('click', appData.addIncomeBlock);

// Отображение значения ползунка периода
periodSelect.addEventListener('input', appData.getRangeValue);

// Валидация контента, который вводит пользователь в поля ввода
document.querySelectorAll('input[placeholder="Наименование"]').forEach(input => {
	input.addEventListener('input', () => {
		let matchValue = /\w/;
		let matchIndex = input.value.search(matchValue);
		if(matchIndex !== -1) {
			input.value = input.value.substr(0, matchIndex);
		}
	});
});

document.querySelectorAll('input[placeholder="Сумма"]').forEach(input => {
	input.addEventListener('input', () => {
		let matchValue = /\D/;
		let matchIndex = input.value.search(matchValue);
		if(matchIndex !== -1) {
			input.value = input.value.substr(0, matchIndex);
		}
	});
});

// let f = 1;
// document.querySelectorAll('input[placeholder="Наименование"]').forEach((string) => {
// 	string.value.split('').forEach((item) => {
// 		if((item >= 'А' && item <= 'ё') || (item >= ';' && item <= "'") || item === ' ' || item === '') {
// 			console.log(`OK --> ${string.value}`);
// 		} else {
// 			f = 0;
// 			return;
// 		}
// 	});
// });

// document.querySelectorAll('input[placeholder="Сумма"]').forEach((string) => {
// 	string.value.split('').forEach((item) => {
// 		if((item >= '0' && item <= '9') || item === ',' || item === '.' || item === '') {
// 			console.log(`OK --> ${string.value}`);
// 		} else {
// 			f = 0;
// 			return;
// 		}
// 	});
// });

// if(!f) return;








// console.log('Наша программа включает в себя данные: ');
// for(let key in appData) {
// 	console.log(appData[key]);
// }


// let arr = Object.keys(appData.expenses);

// for(let i = 0; i < arr.length; i++) {
// 	arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// console.log('Обязательные расходы: ' + arr.join(', '));