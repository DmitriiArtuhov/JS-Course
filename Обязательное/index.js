function DomElement(selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height =height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
}

DomElement.prototype.createDomElement = function () {
	if(this.selector[0] === '.') {

		let element = document.createElement('div');
		let modifiedSelector = this.selector.split('');
		modifiedSelector.shift();
		element.className = modifiedSelector.join('');
		element.textContent = "Был создан блок";

		//Вставка css-свойств
		element.style.cssText = "height: " + this.height + "px;" + 
														"width: " + this.width + "px;" + 
														"background: " + this.bg + ";" + 
														"font-size: " + this.fontSize + "px;";

		document.body.insertBefore(element, document.querySelector('script'));

	} else if (this.selector[0] === '#') {
		
		let element = document.createElement('p');
		element.textContent = "Был создан параграф";

		//Вставка css-свойств
		element.style.cssText = "height: " + this.height + "px;" + 
														"width: " + this.width + "px;" + 
														"background: " + this.bg + ";" + 
														"font-size: " + this.fontSize + "px;";

		document.body.insertBefore(element, document.querySelector('script'));

	}
}

let elem = new DomElement('.rer', 40, 300, 'yellow', 18);
elem.createDomElement();