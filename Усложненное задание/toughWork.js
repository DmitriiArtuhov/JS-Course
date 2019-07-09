'use strict';

let textDate = document.querySelector('.textDate');

function showData() {
	let dataAndTime = new Date();
	let h = dataAndTime.getHours().toString(),
			m = dataAndTime.getMinutes().toString(),
			s = dataAndTime.getSeconds().toString(),
			d = dataAndTime.getDay().toString(),
			date = dataAndTime.getDate().toString(),
			month = dataAndTime.getMonth().toString(),
			year = dataAndTime.getFullYear();
	checkLength(h);
	checkLength(m);
	checkLength(s);
	checkLength(date);
	checkLength(month);
	textDate.textContent = `${h}:${m}:${s} - ${date}.${month}.${year}`;
}

function checkLength(n) {
	if(n.length < 2) {
		n = '0' + n;
	}
}

setInterval(showData, 1000);
