const countBtn = document.getElementById('start');

const plusBtns = document.getElementsByTagName('button');

const plusBtnOne = plusBtns[0];
const plusBtnTwo = plusBtns[1];


const checkBox = document.querySelector('#deposit-check');

const inputs = document.querySelectorAll('.additional_income-item');

const dayValue = document.querySelectorAll('.budget_day-value');
const monthValue = document.querySelectorAll('.budget_month-value');
const expensesValue = document.querySelectorAll('.expenses_month-value');
const accumulatedValue = document.querySelectorAll('.accumulated_month-value');
const additionalIncome = document.querySelectorAll('.additional_income-value');
const additionalExpenses = document.querySelectorAll('.additional_expenses-value');
const incomePeriod = document.querySelectorAll('.income_period-value');
const targetMonth = document.querySelectorAll('.target_month-value');

console.log(dayValue, monthValue, expensesValue, accumulatedValue, additionalIncome, additionalExpenses, incomePeriod, targetMonth);




const salaryInput = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeInput = document.querySelector('.income-amount');
const additionalIncomeInput = document.querySelectorAll('.additional_income-item');
const expensesTitle = document.querySelector('.expenses-title');
const expensesInput = document.querySelector('.expenses-amount');
const additionalExpensesInput = document.querySelector('.additional_expenses-item');
const targetInput = document.querySelector('.target-amount');
const rangeInput = document.querySelector('.period-select');