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
	if (h.length < 2) {
		h = "0" + h;
	}
	if (m.length < 2) {
		m = "0" + m;
	}
	if (s.length < 2) {
		s = "0" + s;
	}
	if (date.length < 2) {
		date = "0" + date;
	}
	if (month.length < 2) {
		month = "0" + month;
	}
	textDate.textContent = `${h}:${m}:${s} - ${date}.${month}.${year}`;
}

setInterval(showData, 1000);
