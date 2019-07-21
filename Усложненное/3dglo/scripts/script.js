window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// function countTimer() {
	// 	let timerHours = document.querySelector('#timer-hours'),
	// 			timerMinutes = document.querySelector('#timer-minutes'),
	// 			timerSec = document.querySelector('#timer-seconds');

	// 	function getTime() {
	// 		let date = new Date();
	// 		date.setUTCHours(23);
	// 		let	minutes  = date.getUTCMinutes(),
	// 				hours = date.getUTCHours(),
	// 				sec = date.getUTCSeconds();

	// 		return {date, hours, minutes, sec};
	// 	}

	// 	function updateClock() {
	// 		let time = getTime();

			// if(time.date.getUTCHours() === 24) {
			// 	// time.hours = 0;
			// 	// timerHours.textContent = '0' + time.hours;
			// 	time.date.setUTCHours('0');
			// } else {
			// 	time.hours < 10 ? timerHours.textContent = '0' + time.hours : timerHours.textContent = time.hours;
			// 	time.minutes < 10 ? timerMinutes.textContent = '0' + time.minutes : timerMinutes.textContent = time.minutes;
			// 	time.sec < 10 ? timerSec.textContent = '0' + time.sec : timerSec.textContent = time.sec;
			// }
			
	// 		setInterval(updateClock, 1000);
	// 	}
	// 	updateClock();

	// 	getTime();
	// }

	// countTimer();


	let timerHours = document.querySelector('#timer-hours');
	let	timerMinutes = document.querySelector('#timer-minutes');
	let	timerSec = document.querySelector('#timer-seconds');

	(function setCounter(callback) {
		function output( ms ){

			let h = +Math.floor( ms / (60*60*1000)),
			m = +Math.floor((ms -= h*60*60*1000) / (60*1000) ),
			s = +Math.floor((ms -= m*60*1000) / 1000 );

		let stringH = '',
				stringM = '',
				stringS = '';
					if(h && h !== 24) stringH += h < 10 ? '0' + h : h; else stringH += '00';
					if(m) stringM += m < 10 ? '0' + m : m; else stringM += '00';
					if(s) stringS += s < 10 ? '0' + s : s; else stringS += '00';
		 
					return  {stringH, stringM, stringS};
			}
			

			let endCounter = /(?:^|; )endCounter=([^;]*)/.exec(document.cookie);
					if(endCounter) {
							endCounter = new Date(+endCounter[1]);
					} else {
							endCounter = new Date();
							endCounter.setTime(endCounter.getTime() + 24*60*60*1000);
							document.cookie = "endCounter=" + +endCounter + ';path=/;expires=' + endCounter.toUTCString();
					}

			(function counter(){
								let left = endCounter - new Date('00:00:00');
								if(left <= 0){
									return setCounter();
								} 			 
								callback( output( endCounter - new Date() ) );			 
								setTimeout(counter, 1000);
			}());

	}( function( str ){
		timerHours.textContent = str['stringH'];
		timerMinutes.textContent = str['stringM'];
		timerSec.textContent = str['stringS'];

	}));
});