window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	function countTimer() {
		let timerHours = document.querySelector('#timer-hours'),
				timerMinutes = document.querySelector('#timer-minutes'),
				timerSec = document.querySelector('#timer-seconds');

		function getTime() {
			let date = new Date(),
					minutes  = date.getUTCMinutes(),
					hours = date.getUTCHours(),
					sec = date.getUTCSeconds();

			return {hours, minutes, sec};
		}

		function updateClock() {
			let time = getTime();

			if(time.hours == 24) {
				time.hours = 0;
				timerHours.textContent = '0' + time.hours;
			} else {
				time.hours < 10 ? timerHours.textContent = '0' + time.hours : timerHours.textContent = time.hours;
			}
			
			time.minutes < 10 ? timerMinutes.textContent = '0' + time.minutes : timerMinutes.textContent = time.minutes;
			time.sec < 10 ? timerSec.textContent = '0' + time.sec : timerSec.textContent = time.sec;

			setInterval(updateClock, 1000);
		}
		updateClock();


	}
	countTimer();

});