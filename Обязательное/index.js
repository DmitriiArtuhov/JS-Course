class DomElement {
	constructor(selector = ".element", height = 100, width = 100, bg = "#333", fontSize = 16, content = "Был создан элемент") {
		this.selector = selector;
		this.height =height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.content = content;
	}
	
	addCssProperties(element) {
		element.style.cssText = "height: " + this.height + "px;" + 
															"width: " + this.width + "px;" + 
															"background: " + this.bg + ";" + 
															"font-size: " + this.fontSize + "px;";
	}

	createDomElement() {
		if(this.selector[0] === '.') {

			let element = document.createElement('div');
			let modifiedSelector = this.selector.split('');
			modifiedSelector.shift();
			element.className = modifiedSelector.join('');
			element.textContent = this.content;

			//Вставляем контент через функцию
			this.addCssProperties(element);
	
			document.body.insertBefore(element, document.querySelector('script'));
	
		} else if (this.selector[0] === '#') {
			
			let element = document.createElement('p');
			element.textContent = this.content;

			//Вставляем контент через функцию
			this.addCssProperties(element);
	
			document.body.insertBefore(element, document.querySelector('script'));
	
		}
	}
	
}


let elem = new DomElement('.rer', 40, 300, 'red', 18,"Тескт через параметр");
elem.createDomElement();









// DomElement.prototype.createDomElement = function () {
// 	if(this.selector[0] === '.') {

// 		let element = document.createElement('div');
// 		let modifiedSelector = this.selector.split('');
// 		modifiedSelector.shift();
// 		element.className = modifiedSelector.join('');
// 		element.textContent = "Был создан блок";

// 		//Вставка css-свойств
// 		element.style.cssText = "height: " + this.height + "px;" + 
// 														"width: " + this.width + "px;" + 
// 														"background: " + this.bg + ";" + 
// 														"font-size: " + this.fontSize + "px;";

// 		document.body.insertBefore(element, document.querySelector('script'));

// 	} else if (this.selector[0] === '#') {
		
// 		let element = document.createElement('p');
// 		element.textContent = "Был создан параграф";

// 		//Вставка css-свойств
// 		element.style.cssText = "height: " + this.height + "px;" + 
// 														"width: " + this.width + "px;" + 
// 														"background: " + this.bg + ";" + 
// 														"font-size: " + this.fontSize + "px;";

// 		document.body.insertBefore(element, document.querySelector('script'));

// 	}
// }
