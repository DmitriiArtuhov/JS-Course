let greet = document.querySelector('#greeting'),
		day = document.querySelector('#day'),
		time = document.querySelector('#time'),
		newYear = document.querySelector('#newYear');


let date = new Date();
let hours = date.getHours(),
		days = date.getDay(),
		realTime = date.toLocaleTimeString('en'),
		newYearTime = Math.floor((new Date(2020, 0, 1).getTime() - date.getTime()) / 86400000);



newYear.textContent = 'До нового года осталось ' + newYearTime + ' дней';
time.textContent = 'Текущее время: ' + realTime;

if(hours >= 5 && hours <= 12) {
	greet.textContent = 'Доброе утро';
} else if(hours > 12 && hours <= 16) {
	greet.textContent = 'Добрый день';
} else if(hours > 16 && hours <= 21) {
	greet.textContent = 'Добрый вечер';
} else {
	greet.textContent = 'Доброй ночи';
}

switch(days) {
	case 0:
		day.textContent = 'Сегодня: Воскресенье';
		break;

	case 1:
		day.textContent = 'Сегодня: Понедельник';
		break;

	case 2:
		day.textContent = 'Сегодня: Вторник';
		break;

	case 3:
		day.textContent = 'Сегодня: Среда';
		break;

	case 4:
		day.textContent = 'Сегодня: Четверг';
		break;

	case 5:
		day.textContent = 'Сегодня: Пятница';
		break;

	case 6:
		day.textContent = 'Сегодня: Суббота';
		break;
}

