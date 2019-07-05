"use strict";

let money,
		question1,
		question2;

let start = function() {
	money = prompt("Ваш месячный доход?", 50000);
};
start();

let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 50000,
	period: 12,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	getExpensesMonth: function() { // Расходы за месяц

		for(let key in appData.expenses) {
			appData.expensesMonth += Number(appData.expenses[key]);
		}
		console.log('Расходы за месяц: ', appData.expensesMonth);
		
	},
	getBudget: function() {  // Накопления за месяц (Доходы - расходы) (getAccumulatedMonth - старое название функции, замена названия требуется в 8 пункте)
		appData.budgetMonth = Number(money - appData.expensesMonth);
		appData.budgetDay = Math.floor((money - appData.expensesMonth) / 30);
	},
	getTargetMonth: function() {  // Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
		appData.period = Math.floor(appData.mission / appData.budgetMonth);

		if(appData.period < 0) {
			console.log("Цель не будет достигнута");
		} else {
			console.log("Цель будет достигнута через ", appData.period, " месяц(ев)");
		}
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
	asking: function() {
		let	addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
		appData.addExpenses = addExpenses.toLowerCase().split(',');

		while(addExpenses === null || addExpenses === '') {
			addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (Это обязательное поле)");
		}

		appData.deposit = confirm("Есть ли у вас депозит в банке?");

		for(let i = 0; i < 2; i++) {
			if(i === 0) {
				question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "food");

				while(question1 === null || question1 === '') {
					question1 = prompt("Пожалуйста, введите свои ежемесячные расходы", "food");
				}

				let check = prompt("Во сколько это обойдется?", 600);
				appData.expenses[question1] = check;

				while(check === null || check === '' || isNaN(check)) {
					check = prompt("Во сколько это обойдется? (Это обязательное поле)", 600);
					appData.expenses[question1] = check;
				}

			} else if(i === 1) {
				question2 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?", "goods");

				while(question2 === null || question2 === '') {
					question2 = prompt("Пожалуйста, введите свои ежемесячные расходы", "goods");
				}

				let check = prompt("Во сколько это обойдется?", 800);
				appData.expenses[question2] = check;

				while(check === null || check === '' || isNaN(check)) {
					check = prompt("Во сколько это обойдется? (Это обязательное поле)", 800);
					appData.expenses[question2] = check;
				}
			}
		}
	}
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Наша программа включает в себя данные: ');
for(let key in appData) {
	console.log(appData[key]);
}