let block = document.querySelector('#block'),
		start = document.querySelector('#start'),
		reset = document.querySelector('#reset'),
		stop = document.querySelector('#stop');

let id;

const position = {
	leftX: 0,
	rightX: 600
}

function animate() {
	id = requestAnimationFrame(animate);
	if(position.leftX <= 600) {

		position.leftX += 3;
		block.style.left = position.leftX + 'px';

	} else if(position.rightX >= 0) {

		position.rightX -= 3;
		block.style.left = position.rightX + 'px';

	} else if(position.rightX < 0) {

		position.leftX = 0;
		position.rightX = 600;

	}
}

start.addEventListener('click', function(e) {
	e.preventDefault();

	cancelAnimationFrame(id);
	id = requestAnimationFrame(animate);
});

stop.addEventListener('click', function(e) {
	e.preventDefault();

	cancelAnimationFrame(id);
});

reset.addEventListener('click', function(e) {
	e.preventDefault();
	
	cancelAnimationFrame(id);
	id = requestAnimationFrame(animate);
	position.leftX = 0;
	position.rightX = 600;
});