// #2
const startBtn = document.getElementById('start'); // кнопка рассчитать

const plusBtns = document.getElementsByTagName('button'); // кнопка добавления полей ввода
const plusBtnOne = plusBtns[0]; // первая кнопка добавления
const plusBtnTwo = plusBtns[1]; // вторая кнопка добавления

const checkBox = document.querySelector('#deposit-check'); // чекбокс для депозита

// Поля ввода
// const budgetDayValue = document.querySelectorAll('.budget_day-value');
// const budgetMonthValue = document.querySelectorAll('.budget_month-value');
// const expensesMonthValue = document.querySelectorAll('.expenses_month-value');
// const accumulatedMonthValue = document.querySelectorAll('.accumulated_month-value');
// const additionalIncomeValue = document.querySelectorAll('.additional_income-value');
// const additionalExpensesValue = document.querySelectorAll('.additional_expenses-value');
// const incomePeriodValue = document.querySelectorAll('.income_period-value');
// const targetMonthValue = document.querySelectorAll('.target_month-value');
let inputsValues = document.querySelectorAll('.result input[class$="value"]');

// Поля вывода
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const additionalIncome = document.querySelectorAll('.additional_income-item');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpenses = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');