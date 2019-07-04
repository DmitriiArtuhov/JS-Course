// #1

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for(let i = 0; i < weekDays.length; i++) {
	if(i === 0 || i === 6) {
		document.write(weekDays[i].italics() + '\n');
	} else {
		document.write(weekDays[i] + '\n');
	}
}

currentDay = new Date();
document.write('\n' + weekDays[currentDay.getDay()].bold());

// По какой-то причине не работает перенос строки в Chrome ('\n')