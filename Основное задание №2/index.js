const dog = document.querySelector('#dog'),
			cat = document.querySelector('#cat'),
			fox = document.querySelector('#fox');
			card = document.querySelector('.card'),
			container = document.querySelector('.container');


const createElement = (tag, className) => {
	if(container.children.length) {
		for(let i = 0; i < container.children.length; i++) {
			container.children[i].remove();
		}
	}
	let elem;
	if(tag === 'img') {
		elem = document.createElement('img');
	} else if(tag === 'video') {
		elem = document.createElement('iframe');
	}

	elem.classList.add(className);
	container.appendChild(elem);
	return elem;
}


card.addEventListener('click', (e) => {
	let target = e.target;
	if(target.matches('.card')) {
		return;
	}

	if(target === dog) {
		getData('https://random.dog/woof.json')
				.then((res) => {
					if(res.status !== 200) throw new Error('invalid status code.');
					return res.json();
				})
				.then((data) => {
					if(data.url.search('mp4') > -1 || data.url.search('gif') > -1 || data.url.search('webm') > -1) {
						
						let video = createElement('video', 'video');
						video.src = data.url;
					} else {
						let img = createElement('img', 'img');
						img.src = data.url;
					}
				
				})

				.catch((err) => {
					console.error(err);
				});

	} else if(target === cat) {
		getData('https://aws.random.cat/meow')
				.then((res) => {
					if(res.status !== 200) throw new Error('invalid status code.');
					return res.json();
				})
				
				.then((data) => {
					if(data.file.search('mp4') > -1 || data.file.search('gif') > -1 || data.file.search('webm') > -1) {
						
						let video = createElement('video', 'video');
						video.src = data.file;
					} else {
						let img = createElement('img', 'img');
						img.src = data.file;
					}
				
				})

				.catch((err) => {
					console.error(err);
				});

	} else if(target === fox) {
		getData('./server.php')
			.then((res) => {
				if(res.status !== 200) throw new Error('invalid status code.');
				return res.json();
			})

			.then((data) => {
				if(data.image.search('mp4') > -1 || data.image.search('gif') > -1 || data.image.search('webm') > -1) {
					
					let video = createElement('video', 'video');
					video.src = data.image;
				} else {
					let img = createElement('img', 'img');
					img.src = data.image;
				}
			
			})

			.catch((err) => {
				console.error(err);
			});
	}
});


const getData = (url) => {
	return fetch(url, {
		method: 'GET',
		mode: 'cors',
	});
}