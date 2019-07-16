window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	function countTimer(deadline) {
		let timerHours = document.querySelector('#timer-hours'),
				timerMinutes = document.querySelector('#timer-minutes'),
				timerSeconds = document.querySelector('#timer-seconds');


		function getTimeRemaining() {
			let dateStop = new Date(deadline).getTime(),
					dateNow = new Date().getTime(),
					timeRemaining = (dateStop - dateNow) / 1000,
					seconds = Math.floor(timeRemaining % 60),
					minutes  = Math.floor((timeRemaining / 60) % 60),
					hours = Math.floor(timeRemaining / 60 / 60); 

					return {timeRemaining, hours, minutes, seconds};
		}

		let timeLeft = getTimeRemaining(),
				zeroValue = '00';

		if(timeLeft.timeRemaining <= 0) {
			timerHours.textContent = zeroValue;
			timerMinutes.textContent = zeroValue;
			timerSeconds.textContent = zeroValue;
		} else {
			function updateClock() {
				let timer = getTimeRemaining();
				if(timer.timeRemaining <= 0) {
					timerHours.textContent = zeroValue;
					timerMinutes.textContent = zeroValue;
					timerSeconds.textContent = zeroValue;
				} else {
					timer.hours < 10 ? timerHours.textContent = '0' + timer.hours : timerHours.textContent = timer.hours;

					timer.minutes < 10 ? timerMinutes.textContent = '0' + timer.minutes : timerMinutes.textContent = timer.minutes;

					timer.seconds < 10 ? timerSeconds.textContent = '0' + timer.seconds : timerSeconds.textContent = timer.seconds;
				}
				
				if(timer.timeRemaining > 0) {
					setInterval(updateClock, 1000);
				}
			}
			updateClock();
		}
		
	}

	countTimer('16 july 20:57:30 2019');

});