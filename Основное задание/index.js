"use strict";

 let money      = +prompt("Ваш месячный доход?"),
		addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
		deposit     = confirm("Есть ли у вас депозит в банке?"),
		income      = "Freelance - 200000",
		mission     = 100000,
		period      = 12,
		budgetDay;

console.log(addExpenses.split(","));
console.log(typeof money, typeof income, typeof deposit);

let question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		question2 = +prompt("Во сколько это обойдется?"),
		question3 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?"),
    question4 = +prompt("Во сколько это обойдется?");

let budgetMonth = money - (question2 + question4);

console.log("butgetMouth: " + budgetMonth);

console.log("До достижения цели осталось примерно: " + Math.ceil(mission / budgetMonth) + " месяцев");

butgetDay = Math.floor(budgetMonth / 30);



if(butgetDay > 800) {

	console.log("Высокий уровень дохода!");

} else if(butgetDay > 300 && butgetDay < 800) {

	console.log("Средний уровень дохода!");

} else if(butgetDay > 0 && butgetDay < 300) {

	console.log("Низкий уровень дохода!");

} else if(butgetDay < 0) {

	console.log("Что-то пошло не так...");

} else if(butgetDay === 800) {

	console.log("Почти высокий уровень дохода!");

} else if(butgetDay === 300) {

	console.log("Почти средний уровень дохода!");

} else {
	console.log("Дохода нет!");
}