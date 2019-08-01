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
 export default toggleMenu;