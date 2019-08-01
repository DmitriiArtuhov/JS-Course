const calc = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block'),
				calcType = document.querySelector('.calc-type'),
				calcSquare = document.querySelector('.calc-square'),
				calcDay = document.querySelector('.calc-day'),
				calcCount = document.querySelector('.calc-count'),
				totalValue = document.getElementById('total');


	const animateTotal = (sum = 0) => {
		const speed = 1000 / (sum * 100);
		let i = 0;

		let animation = setInterval(() => {
			if(i <= sum) {
				totalValue.textContent = i;
			} else {
				clearInterval(animation);
			}

			i += 10;
		}, speed);
	}


	const countSum = () => {
		let total = 0,
				dayValue = 1,
				countValue = 1,
				typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

		if(calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}

		if(calcDay.value && calcDay.value < 5) {
			dayValue *= 2;
		} else if(calcDay.value && calcDay.value < 10) {
			dayValue *= 1.5;
		}

		if(typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		}

		animateTotal(total);
	}


	calcBlock.addEventListener('change', (event) => {
		let target = event.target;

		if(target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
			countSum();
		}
	});
}

export default calc;
