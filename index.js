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

while (num > 0) {
	mult *= num % 10;  // Находит произведение цифр числа num
	num = Math.floor(num / 10);  // Удаляет из числа num посчитанные цифры
}

console.log(mult);

// #2

mult **= 3; // возводит число в 3 степень
console.log(mult % 100); // выводит первые 2 цифры полученного числа