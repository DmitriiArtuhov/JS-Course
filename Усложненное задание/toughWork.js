// #1
// let arr = [];

for(let i = 0; i < 7; i++) {
	arr[i] = prompt('Введите многозначное число');
}

for(let i = 0; i < arr.length; i++) {
	if(Number(arr[i][0]) === 2 || Number(arr[i][0]) === 4) {
		console.log(Number(arr[i]));
	}
}

// #2

for(let i = 1; i <= 100; i++) {
	let count = 0;
	for(let j = Math.ceil(i / 2); j > 0; j--) {
		if(!(i % j)) {
			count++;
		}
	}
	if(count === 1) {
		console.log(i, ' Делители этого числа: ', count, ' и ', i);
	}
}