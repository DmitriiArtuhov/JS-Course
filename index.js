// #1

let money = 1000000000000000000,  // доход за месяц
income = 'Freelance - 200000',
addExpenses = 'Food, Apartment, Laptop',
deposit = false,
mission = 100000000000000000000000000000000000,
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
