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
															"font-size: " + this.fontSize + "px;" +
															"position: absolute;";
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
			return element;
	
		} else if (this.selector[0] === '#') {
			
			let element = document.createElement('p');
			element.textContent = this.content;

			//Вставляем контент через функцию
			this.addCssProperties(element);
	
			document.body.insertBefore(element, document.querySelector('script'));
			return element;
	
		}
	}
	
}

let elem = new DomElement('.block', 100, 100, 'yellow', 14);



let div;
document.addEventListener('DOMContentLoaded', div = elem.createDomElement());


let obj = {
		posX: 0,
		posY: 0
	};

document.addEventListener('keydown', function(e) {
	div.style.top = obj.posX + 'px';
	if(e.code === "ArrowUp") {
		obj.posX += -10;
		div.style.top = obj.posX + 'px';
	}
	else if(e.code === "ArrowDown") {
		obj.posX += 10;
		div.style.top = obj.posX + 'px';
	}
	else if(e.code === "ArrowLeft") {
		obj.posY -= 10;
		div.style.left = obj.posY + 'px';
	}
	else if(e.code === "ArrowRight") {
		obj.posY += 10;
		div.style.left = obj.posY + 'px';
	}
});

