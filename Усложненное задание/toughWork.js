// #1

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let currentDay = new Date();
currentDay = currentDay.getDay();

if(currentDay === 0) {
	currentDay = this.length - 1;
} else {
	currentDay--;
}

weekDays.forEach((item, i) => {
	let div = document.createElement('div');
	div.innerText = item;

	if(item === 'Saturday' || item === 'Sunday') {
		div.classList.add('italic');
	}

	document.body.append(div);

	if(i === currentDay) {
		div.classList.add('bold');
	}
});