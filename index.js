let userScoreOutput = document.querySelector('.user-score');
let comScoreOutput = document.querySelector('.computer-score');

let reset = document.querySelector('.reset-btn');
reset.style.display = 'none';

let start = document.querySelector('.start-btn');

let message = document.querySelector('.message');
let userMessage = document.querySelector('.user-message');
let comMessage = document.querySelector('.computer-message');

let userStars = document.querySelectorAll('.user-star');
let comStars = document.querySelectorAll('.computer-star');

let userStarsIndex = 0;
let comStarsIndex = 0;

let userScore = 0;
let comScore = 0;


const getComputerChoice = () => {
	let choice = Math.random();

	if(choice <= 0.33) {
		choice = 'rock';
	} else if(choice <= 0.66) {
		choice = 'scissors';
	} else {
		choice = 'paper';
	}
	return choice;
}

const calcScore = (user, computer) => {
	if(user === 'rock' && computer == 'scissors') {
		message.innerText = 'you win !';
		++userStarsIndex;
	} else if(user === 'paper' && computer === 'rock') {
		message.innerText = 'you win !';
		++userStarsIndex;
	} else if(user === 'scissors' && computer === 'paper') {
		message.innerText = 'you win !';
		++userStarsIndex;
	} else if(user === 'rock' && computer === 'paper') {
		message.innerText = 'computer wins !';
		++comStarsIndex;
	} else if(user === 'paper' && computer === 'scissors') {
		message.innerText = 'computer wins !';
		++comStarsIndex;
	}else if(user === 'scissors' && computer === 'rock') {
		message.innerText = 'computer wins !';
		++comStarsIndex;
	} else {
		message.innerText = 'TIE !';
	}
}

const clearGame = () => {
	reset.style.display = 'none';
	userMessage.innerText = 'Your choice';
	comMessage.innerText = 'Computer\'\s choice';

	start.style.display = 'none';
	message.innerText = 'Game is on !'
	document.querySelectorAll('i.choice-item').forEach((item) => {
		item.addEventListener('click', startGame);
	});

	userStarsIndex = 0;	
	comStarsIndex = 0;

	userStars.forEach((item) => {
		item.classList.remove('color-star');
	});

	comStars.forEach((item) => {
		item.classList.remove('color-star');
	});

}

const startGame = (e) => {
	const userChoice = e.target.getAttribute('data-value');
	const comChoice = getComputerChoice();
	
	userMessage.innerText = userChoice;
	comMessage.innerText = comChoice;

	calcScore(userChoice, comChoice);

	if(message.innerText === 'YOU WIN !') {
		userStars[userStarsIndex - 1].classList.add('color-star');
	} else if(message.innerText === 'COMPUTER WINS !') {
		comStars[comStarsIndex - 1].classList.add('color-star');
	}

	if(userStarsIndex === 3) {
		userScore++;
		userScoreOutput.innerText = userScore;
		reset.style.display = 'block';
		message.innerText = '';
		document.querySelectorAll('i.choice-item').forEach((item) => {
			item.removeEventListener('click', startGame);
		});
		reset.addEventListener('click', clearGame);
	} else if(comStarsIndex === 3) {
		comScore++;
		comScoreOutput.innerText = comScore;
		reset.style.display = 'block';
		message.innerText = '';
		document.querySelectorAll('i.choice-item').forEach((item) => {
			item.removeEventListener('click', startGame);
		});
		reset.addEventListener('click', clearGame);
	}

	console.log(userStarsIndex, comStarsIndex);
}


start.addEventListener('click', () => {
	start.style.display = 'none';
	message.innerText = 'Game is on !'
	document.querySelectorAll('i.choice-item').forEach((item) => {
		item.addEventListener('click', startGame);
	});
});



