"use strict";

 let money,
		addExpenses = +prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
		deposit     = confirm("Есть ли у вас депозит в банке?"),
		income      = "Freelance - 200000",
		mission     = 100000,
		period      = 12;


let start = function() {
	money = prompt("Ваш месячный доход?", 50000);

	do {
		money = prompt("Ваш месячный доход?", 50000);
	} while(isNaN(money) || money == "" || money == null)
	console.log("Доходы: " + money);
};
start();

let question1,
		question2;


let getExpensesMonth = function() {
	let sum = 0;

	for(let i = 0; i < 2; i++) {
		if(i === 0) {
			question1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "food");
		} else if(i === 1) {
			question2 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?", "more food");
		}

		let check = prompt("Во сколько это обойдется?", 600);
		while(isNaN(check) || check == "" || check == null) {
			check = prompt("Во сколько это обойдется?", 600);
		}
		sum += +check;
	}
	console.log("sum: " + sum);
	return sum;
};

let allExpenses = getExpensesMonth();




//функция getAccumulatedMonth. Функция возвращает
//Накопления за месяц (Доходы минус расходы) 
//Результат сохранить в переменную accumulatedMonth
function getAccumulatedMonth(salary, expenses) {
	return salary - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, allExpenses);
// console.log("Накопления за месяц: ", accumulatedMonth);


//Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
function getTargetMonth(goal, accumulatedMoneyMonth) {
	return Math.floor(goal / accumulatedMoneyMonth);
}
// console.log("Количество месяцев до цели: ", getTargetMonth(mission, accumulatedMonth));

if(getTargetMonth(mission, accumulatedMonth) < 0) {
	console.log("Цель не будет достигнута");
} else {
	console.log("Цель будет достигнута через ", getTargetMonth(mission, accumulatedMonth));
}



let budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Ежедневный бюджет: ", budgetDay);

//Накопления за период
console.log("Накопления за период: ", accumulatedMonth * period);



//Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
function getTargetMonth(goal, accumulatedMoneyMonth) {
	return Math.floor(goal / accumulatedMoneyMonth);
}
// console.log("Количество месяцев до цели: ", getTargetMonth(mission, accumulatedMonth));



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