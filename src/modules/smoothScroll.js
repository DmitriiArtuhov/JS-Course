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


export default smoothScroll;