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

	countTimer('19 july 20:57:30 2019');


	//---  Lesson13 - 14  ---//
	// menu
	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
					menu = document.querySelector('menu'),
					closeBtn = document.querySelector('.close-btn'),
					menuItems = menu.querySelectorAll('ul > li');
	
		
		menu.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('ul > li');

			if(target) {
				handleMenu();
			}
				
		});

		window.addEventListener('click', (e) => {
			let target = e.target;
			const imgBtn = btnMenu.querySelector('img');
			const textBtn = btnMenu.querySelector('small');

			if(target !== menu && menu.classList.contains('active-menu') && target !== imgBtn && target !== textBtn) {
				handleMenu();
			}
									
		});
		
		const handleMenu = () => {
			menu.classList.toggle('active-menu');
		}
		
		btnMenu.addEventListener('click', handleMenu);
		closeBtn.addEventListener('click', handleMenu);

	}

	toggleMenu();

	// popup

	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
					popupBtn = document.querySelectorAll('.popup-btn'),
					popupClose = document.querySelector('.popup-close');

		const fadeIn = () => {
			popup.classList.remove('modal-animation-out');
			popup.classList.add('modal-animation-in');
		}

		const fadeOut = () => {
			popup.classList.add('modal-animation-out');
			popup.classList.remove('modal-animation-in');
		}

		const popupCloseFunc = () => {
			if(window.innerWidth > 320) {
				fadeOut();
				setTimeout(() => {
					popup.style.display = 'none';
				}, 500);
			} else {
				popup.style.display = 'none';
			}
		}

		const popupOpenFunc = () => {
			if(window.innerWidth > 320) {
				popup.style.display = 'block';
				fadeIn();
			} else {
				popup.style.display = 'block';
			}
		}


		popupBtn.forEach((item) => {
			item.addEventListener('click', () => {
				popupOpenFunc();
				
			});
		});

		popupClose.addEventListener('click', () => {
			popupCloseFunc();
			
		});

		popup.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.popup-content');

			if(!target) {
				popupCloseFunc();
			}
		});

	}

	togglePopUp();

	//	Smooth scroll
	const scrollBtn = document.querySelector('#scroll-btn');

	const smoothScroll = (target, duration) => {
		let targetElement = document.querySelector(target);
		let targetPosition = targetElement.getBoundingClientRect().top;
		let startPosition = window.pageYOffset;
		let distance = targetPosition - startPosition;
		let startTime = null;
		// Animation function
		const animation = (currentTime) => {
			if(startTime === null) {
				startTime = currentTime;
			}

			let timeElapsed = currentTime - startTime;
			let run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);

			if(timeElapsed < duration) {
				requestAnimationFrame(animation);
			}
			
		}
		// Animation type function
		const ease = (t, b, c, d) => {
			t /= d / 2;
			if(t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}

	
	scrollBtn.addEventListener('click', () => {
		smoothScroll(scrollBtn.hash, 800); 
	});

	document.querySelectorAll('ul > li > a').forEach(item => {
		item.addEventListener('click', () => {
			smoothScroll(item.hash, 1000); 
		});
	});



	//---  Lesson14  ---//
	// Tabs

	const tabs = () => {
		let tabHeader = document.querySelector('.service-header'),
				tabs = tabHeader.querySelectorAll('.service-header-tab'),
				tabContent = document.querySelectorAll('.service-tab');
		
		const toggleTabContent = (index) => {
			for(let i = 0; i < tabContent.length; i++) {
				if(index === i) {
					tabs[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tabs[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		}
		
		tabHeader.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.service-header-tab');
			
			if(target) {
				tabs.forEach((item , i) => {
					if(item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	}

	tabs();

	//---  Practice02  ---//
	// Slider

	const slider = () => {
		const slides = document.querySelectorAll('.portfolio-item'),
					btns = document.querySelectorAll('.portfolio-btn'),
					dotsContainer = document.querySelector('.portfolio-dots'),
					slider = document.querySelector('.portfolio-content');
		
		let interval, dots;
		let currentSlide = 0;

		const showDots = () => {
			slides.forEach(() => {
				let dot = document.createElement('li');
				dot.classList.add('dot');

				dotsContainer.appendChild(dot);
			});
			dots = document.querySelectorAll('.dot');
			dots[0].classList.add('dot-active');
		}

		const hideElem = (elems, index, className) => {
			elems[index].classList.remove(className);
		}

		const showElem = (elems, index, className) => {
			elems[index].classList.add(className);
		}

		const autoPlaySlide = () => {
			hideElem(slides, currentSlide, 'portfolio-item-active');
			hideElem(dots, currentSlide, 'dot-active');

			currentSlide++;
			if(currentSlide >= slides.length) {
				currentSlide = 0;
			}

			showElem(slides, currentSlide, 'portfolio-item-active');
			showElem(dots, currentSlide, 'dot-active');
		}

		const startSlide = (time = 1500) => {
			interval = setInterval(autoPlaySlide, time);
		}

		const stopSlide = () => {
			clearInterval(interval);
		}

		slider.addEventListener('click', (e) => {
			e.preventDefault();

			let target = e.target;

			if(!target.matches('.portfolio-btn, .dot')) return;

			hideElem(slides, currentSlide, 'portfolio-item-active');
			hideElem(dots, currentSlide, 'dot-active');

			if(target.matches('#arrow-right')) {
				currentSlide++;
			} else if(target.matches('#arrow-left')) {
				currentSlide--;
			} else if(target.matches('.dot')) {
				dots.forEach((item, index) => {
					if(item === target) {
						currentSlide = index;
					}
				});
			}

			if(currentSlide >= slides.length) currentSlide = 0;
			if(currentSlide < 0) currentSlide = slides.length - 1;

			showElem(slides, currentSlide, 'portfolio-item-active');
			showElem(dots, currentSlide, 'dot-active');


		});

		slider.addEventListener('mouseover', (e) => {
			if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (e) => {
			if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
				startSlide();
			}
		});

		showDots();
		startSlide(1500);
	}

	slider();


	//---  Lesson15  ---//
	// Regular expressions

	const numberFields = document.querySelectorAll('.calc-item');

	numberFields.forEach((item) => {
		item.addEventListener('input', () => {
			item.value.replace(/D/gi, '');
		});
	});


	// Data-attributes

	const teamContainer = document.querySelector('.command');
	const teamPhotos = document.querySelectorAll('.command__photo');
	const teamPhotosPaths = [];

	teamPhotos.forEach((item) => teamPhotosPaths.push(item.src));


	teamContainer.addEventListener('mouseover', (e) => {
		let target = e.target;

		if(target.matches('.command__photo')) {
			target.src = target.getAttribute('data-img');
		} else {
			teamPhotos.forEach((item, index) => {
				item.src = teamPhotosPaths[index];
			});
		}
	});


});




// Lesson 18
// Refactor ajax form

//processing request  //, outputData, errorData
const postData = (body) => {

	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState !== 4) {
				return;
			}

			if(request.status === 200) {
				//outputData();
				resolve();
			} else {
				reject(request.status);
			}

		});

		request.open('POST', './server.php');
		request.setRequestHeader('Content-Type', 'application/json');
		
		request.send(JSON.stringify(body));
		console.log(body);

	});

	
}

//cleaning inputs
const clearInputs = (inputs) => {
	inputs.forEach((item) => {
		item.value = '';
	});
};

//checking inputs on valid data
const validateInputs = (name, email, phone, textarea = false) => {
	const regExpText = /[^а-яё!., ]/gi,
				regExpEmail = /[!?*#а-яё'",<>/^%&()_№\{\}\[\]=]/gi,
				regExpPhone = /[^0-9+]/gi;

	name.addEventListener('input', () => {
		name.value = name.value.replace(regExpText, '');
	});
	
	email.addEventListener('input', () => {
		email.value = email.value.replace(regExpEmail, '');
	});

	phone.addEventListener('input', () => {
		phone.value = phone.value.replace(regExpPhone, '');
	});

	if(textarea) {
		textarea.addEventListener('input', () => {
			textarea.value = textarea.value.replace(regExpText, '');
		});
	}
}

//creating wait-img
const creatingWaitImg = () => {
	const img = document.createElement('img');
	img.style.cssText = 'width: 40px; height: 40px;';
	img.setAttribute('src', './images/wait.png');
	return img;
}

//FormData processing
const FormDataProcessing = (form) => {
	const formData = new FormData(form);
	const body = {};
	formData.forEach((item, key) => {
		body[key] = item;
	});

	return body;
} 

//output the message
const output = (result, img) => {
	if(result) {
		img.setAttribute('src', './images/check.png');
	} else {
		img.setAttribute('src', './images/uncheck.jpg');
	}
}



const formProcessing = () => {
	const forms = document.querySelectorAll('form');

	forms.forEach((form) => {
		let inputs = form.querySelectorAll('input');
		const inputName = form.querySelector('.form-name'),
					inputEmail = form.querySelector('.form-email'),
					inputPhone = form.querySelector('.form-phone'),
					textarea = form.querySelector('#form2-message');

		const img = creatingWaitImg();

		validateInputs(inputName, inputEmail, inputPhone, textarea);
	
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(img);
	
			const body = FormDataProcessing(form);
	
			// postData(body, () => {
			// 	output(true, img);
			// }, (error) => {
			// 	output(false, img)
			// 	console.error(error);
			// });

			postData(body)
				.then(() => {
					output(true, img);
				})
				.catch((err) => {
					console.error(err);
					output(false, img);
				});


	
			clearInputs(inputs);
		});		
	});
}

formProcessing();
