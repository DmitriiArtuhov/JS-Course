//processing request  //, outputData, errorData
const postData = (body) => {
	return fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});


	// return new Promise((resolve, reject) => {
	// 	const request = new XMLHttpRequest();
	// 	request.addEventListener('readystatechange', () => {
	// 		if(request.readyState !== 4) {
	// 			return;
	// 		}

	// 		if(request.status === 200) {
	// 			//outputData();
	// 			resolve();
	// 		} else {
	// 			reject(request.status);
	// 		}

	// 	});

	// 	request.open('POST', './server.php');
	// 	request.setRequestHeader('Content-Type', 'application/json');
		
	// 	request.send(JSON.stringify(body));
	// 	console.log(body);

	// });

	
}

//cleaning inputs
const clearInputs = (inputs) => {
	inputs.forEach((item) => {
		item.value = '';
	});
};

//checking inputs on valid data
const validateInputs = (name, email, phone, textarea = false) => {
	const regExpText = /[^а-яё!., ]/gi,
				regExpEmail = /[!?*#а-яё'",<>/^%&()_№\{\}\[\]=]/gi,
				regExpPhone = /[^0-9+]/gi;

	name.addEventListener('input', () => {
		name.value = name.value.replace(regExpText, '');
	});
	
	email.addEventListener('input', () => {
		email.value = email.value.replace(regExpEmail, '');
	});

	phone.addEventListener('input', () => {
		phone.value = phone.value.replace(regExpPhone, '');
	});

	if(textarea) {
		textarea.addEventListener('input', () => {
			textarea.value = textarea.value.replace(regExpText, '');
		});
	}
}

//creating wait-img
const creatingWaitImg = () => {
	const img = document.createElement('img');
	img.style.cssText = 'width: 40px; height: 40px;';
	img.setAttribute('src', './images/wait.png');
	return img;
}

//FormData processing
const FormDataProcessing = (form) => {
	const formData = new FormData(form);
	const body = {};
	formData.forEach((item, key) => {
		body[key] = item;
	});

	return body;
} 

//output the message
const output = (result, img) => {
	if(result) {
		img.setAttribute('src', './images/check.png');
	} else {
		img.setAttribute('src', './images/uncheck.jpg');
	}
}



const formProcessing = () => {
	const forms = document.querySelectorAll('form');

	forms.forEach((form) => {
		let inputs = form.querySelectorAll('input');
		const inputName = form.querySelector('.form-name'),
					inputEmail = form.querySelector('.form-email'),
					inputPhone = form.querySelector('.form-phone'),
					textarea = form.querySelector('#form2-message');

		const img = creatingWaitImg();

		validateInputs(inputName, inputEmail, inputPhone, textarea);
	
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(img);
	
			const body = FormDataProcessing(form);
	
			postData(body)
				.then((res) => {
					if(res.status !== 200) throw new Error('invalid status code.');
					output(true, img);
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
					output(false, img);
				});
	
			clearInputs(inputs);
		});		
	});
}

export default formProcessing;