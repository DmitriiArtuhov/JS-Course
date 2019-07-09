"use strict";

// #1

const books = document.querySelectorAll('.book');
const booksWrapper = document.querySelector('.books');

booksWrapper.insertBefore(books[1], books[0]);
booksWrapper.insertBefore(books[4], books[2]);
booksWrapper.insertBefore(books[3], books[2]);
booksWrapper.insertBefore(books[5], books[2]);

document.body.style.cssText = 'background-image: url("./image/you-dont-know-js.jpg")';


document.querySelectorAll('.book h2 a')[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();


const sortedBooks = document.querySelectorAll('.book ul'); // new order of books

// Second Book
let secondBookContent = sortedBooks[1].querySelectorAll('ul li');

sortedBooks[1].insertBefore(secondBookContent[6], secondBookContent[4]);
sortedBooks[1].insertBefore(secondBookContent[8], secondBookContent[4]);
sortedBooks[1].insertBefore(secondBookContent[2], secondBookContent[10]);

// Fifth Book
let fifthBookContent = sortedBooks[4].querySelectorAll('ul li');

sortedBooks[4].insertBefore(fifthBookContent[2], fifthBookContent[6]);
sortedBooks[4].insertBefore(fifthBookContent[9], fifthBookContent[3]);
sortedBooks[4].insertBefore(fifthBookContent[5], fifthBookContent[8]);

// Sixth Book
let sixthBookContent = sortedBooks[5].querySelectorAll('ul li');

let li = document.createElement('li');
li.textContent = 'Глава 8: За пределами ES6';

sortedBooks[5].insertBefore(li, sixthBookContent[9]);

