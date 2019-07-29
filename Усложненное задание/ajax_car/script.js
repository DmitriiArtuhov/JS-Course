document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const select = document.getElementById('cars'),
		output = document.getElementById('output');

	select.addEventListener('change', () => {

		selectDone()
			.then((data) => {
				data.cars.forEach(item => {
					if (item.brand === select.value) {
						const {
							brand,
							model,
							price
						} = item;
						output.innerHTML = `Тачка ${brand} ${model} <br>
						Цена: ${price}$`;
					}
				});
			})
			.catch((err) => {
				output.innerHTML = err;
			});

	});


	const selectDone = () => {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('GET', './cars.json');
			request.setRequestHeader('Content-type', 'application/json');
			request.send();
			request.addEventListener('readystatechange', () => {
				if (request.readyState === 4) {
					if (request.status === 200) {
						console.log(request.responseText);
						const data = JSON.parse(request.responseText);
						resolve(data);
						
					} else {
						reject('Произошла ошибка');
					
					}
				}
			});
		});
	}

});