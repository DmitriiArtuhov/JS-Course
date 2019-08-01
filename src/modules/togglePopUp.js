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

export default togglePopUp;