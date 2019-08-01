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


export default slider;