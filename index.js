const container = document.querySelector('.cards__wrapper');
const select = document.querySelector('select');
let cardsList = [];

const getCars = (url) => {
	fetch(url)
		.then((res) => {
			if(res.status !== 200) throw new Error('Invalid status code.');
			
			return (res.json());
		})
		.then((data) => {
			data.cars.forEach((item) => {
				createCard(item);
			});
		})
		.catch((err) => {
			console.error(err);
		})
};

const createCard = (info) => {	
	let card = document.createElement('div');
	card.classList.add('card');

	let title = document.createElement('h4');
	title.textContent = info.name;
	let img = document.createElement('img');
	img.src = info.img;
	let desc = document.createElement('p');
	desc.textContent = info.description;
	let price = document.createElement('span');
	price.textContent = info.price;
	let cat = document.createElement('span');
	cat.classList.add('category');
	cat.textContent = info.category;

	card.appendChild(title);
	card.appendChild(img);
	card.appendChild(desc);
	card.appendChild(price);
	card.appendChild(cat);

	container.appendChild(card);
	cardsList.push(card);
};

const filterCards = () => {
	select.addEventListener('change', () => {
		cardsList.forEach((card) => {
			if(card.querySelector('.category').textContent !== select.value.toLowerCase()) {
				card.style.display = 'none';
			} else {
				card.style.display = '';
			}

			if(select.value.toLowerCase() === 'all') {
				cardsList.forEach((card) => {
					card.style.display = 'block';
				});
			}
		});
	});
}

filterCards();
getCars('./cars.json');