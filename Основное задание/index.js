"use strict";

let money,
		question1,
		question2;

let start = function() {
	money = prompt("Ваш месячный доход?", 50000);

	do {
		money = prompt("Ваш месячный доход?", 50000);
	} while (isNaN(money) || money == "" || money == null)
	//console.log("Доходы: " + money);
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
		return appData.expensesMonth;
		
	},
	getBudget: function(salary, expenses) {  // Накопления за месяц (Доходы - расходы) 
		appData.budgetMonth = Number(salary - expenses);
		appData.budgetDay = Math.floor((salary - expenses) / 30);
	},
	getTargetMonth: function(goal, accumulatedMoneyMonth) {  // Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
		return Math.floor(goal / accumulatedMoneyMonth);
	},
	getStatusIncome: function(budgetDay) {  // Проверка на уровень дохода
		if(budgetDay > 800) {

			return ("Высокий уровень дохода!");  // return <-- console.log
		
		} else if(budgetDay > 300 && budgetDay < 800) {
		
			return ("Средний уровень дохода!");  // return <-- console.log
		
		} else if(budgetDay > 0 && budgetDay < 300) {
		
			return ("Низкий уровень дохода!");  // return <-- console.log
		
		} else if(budgetDay < 0) {
		
			return ("Что-то пошло не так...");  // return <-- console.log
		
		} else if(budgetDay === 800) {
		
			return ("Почти высокий уровень дохода!");  // return <-- console.log
		
		} else if(budgetDay === 300) {
		
			return ("Почти средний уровень дохода!");  // return <-- console.log
		
		} else {
			return ("Дохода нет!");
		}
	},
	asking: function() {
		let	addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
		appData.addExpenses = addExpenses.toLowerCase().split(',');
		appData.deposit = confirm("Есть ли у вас депозит в банке?");

		for(let i = 0; i < 2; i++) {
			if(i === 0) {
				question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "food");
			} else if(i === 1) {
				question2 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?", "more food");
			}

			let check = prompt("Во сколько это обойдется?", 600);
			appData.expenses[i] = check;
			while(isNaN(check) || check == "" || check == null) {
				check = prompt("Во сколько это обойдется?", 600);
			}
		}
	}
};

appData.asking();


let allExpenses = appData.getExpensesMonth();
console.log('Расходы за месяц ', allExpenses);

appData.getBudget(money, allExpenses);

if(appData.getTargetMonth(appData.mission, appData.budgetMonth) < 0) {
	console.log("Цель не будет достигнута");
} else {
	console.log("Цель будет достигнута через ", appData.getTargetMonth(appData.mission, appData.budgetMonth), " месяц");
}

// let budgetDay = Math.floor(accumulatedMonth / 30);
// console.log("Ежедневный бюджет: ", budgetDay);

//Накопления за период
// console.log("Накопления за период: ", accumulatedMonth * appData.period);

console.log(appData.getStatusIncome(appData.budgetDay));

console.log('Наша программа включает в себя данные: ');
for(let key in appData) {
	console.log(appData[key]);
}