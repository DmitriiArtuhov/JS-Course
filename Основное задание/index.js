"use strict";

 let money      = +prompt("Ваш месячный доход?", 50000),
		addExpenses = +prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 4000),
		deposit     = confirm("Есть ли у вас депозит в банке?"),
		income      = "Freelance - 200000",
		mission     = 100000,
		period      = 12;


//Оставить функцию showTypeof которую написали в уроке 
function showTypeof(item) {
	return (item + " - " + typeof item);
}
console.log(showTypeof(money));
console.log(showTypeof(deposit));
console.log(showTypeof(income));


let question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "food"),
		question2 = +prompt("Во сколько это обойдется?", 400),
		question3 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?", "more food"),
    question4 = +prompt("Во сколько это обойдется?", 600);

let budgetMonth = money - (question2 + question4);
let budgetDay = Math.floor(budgetMonth / 30);



// Функция  getExpensesMonth.
// Функция возвращает сумму всех расходов за месяц.
let getExpensesMonth = function(expenses1, expenses2, expenses3) {
	return (expenses1 + expenses2 + expenses3);
}
console.log("Расходы: ", getExpensesMonth(question2, question4, addExpenses));



//функция getAccumulatedMonth. Функция возвращает
//Накопления за месяц (Доходы минус расходы) 
//Результат сохранить в переменную accumulatedMonth
function getAccumulatedMonth(salary, expenses) {
	return salary - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(question2, question4, addExpenses));
console.log("Накопления за месяц: ", accumulatedMonth);



//Накопления за период
console.log("Накопления за период: ", accumulatedMonth * period);



//Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
function getTargetMonth(goal, accumulatedMoneyMonth) {
	return Math.floor(goal / accumulatedMoneyMonth);
}
console.log("Количество месяцев до цели: ", getTargetMonth(mission, accumulatedMonth));



//Оставить функцию getStatusIncome которыю написали в уроке 
function getStatusIncome(budgetDay) {

	if(budgetDay > 800) {

		console.log("Высокий уровень дохода!");
	
	} else if(budgetDay > 300 && budgetDay < 800) {
	
		console.log("Средний уровень дохода!");
	
	} else if(budgetDay > 0 && budgetDay < 300) {
	
		console.log("Низкий уровень дохода!");
	
	} else if(budgetDay < 0) {
	
		console.log("Что-то пошло не так...");
	
	} else if(budgetDay === 800) {
	
		console.log("Почти высокий уровень дохода!");
	
	} else if(budgetDay === 300) {
	
		console.log("Почти средний уровень дохода!");
	
	} else {
		console.log("Дохода нет!");
	}

}

getStatusIncome(budgetDay);