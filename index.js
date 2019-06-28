/*--- Основное задание --------------------------------------------------------*/

// #1

let money = 1000,  // доход за месяц
income = 'Freelance - 200000',
addExpenses = 'Food, Apartment, Laptop',
deposit = false,
mission = 100000000,
period = 12;

// #2

console.log(typeof money, typeof income, typeof deposit);
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay);
console.log(money % 30);

/*--- Усложненное задание --------------------------------------------------------*/

// #1

let num = 266219;
let mult = 1;

mult = num.toString().split('').reduce(function(mult, current){
	return mult * current;  // Пользуясь слабой типизацией JS, находим произведение цифр числа num
});

// Разве map() не было бы удобней использовать ?

console.log(mult);

// #2

mult **= 3; // возводит число в 3 степень
console.log(Number(mult.toString().slice(0, 2)));

