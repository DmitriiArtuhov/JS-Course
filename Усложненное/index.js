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
		element.textContent = "Квадрат";

		//Вставка css-свойств
		element.style.cssText = "height: " + this.height + "px;" + 
														"width: " + this.width + "px;" + 
														"background: " + this.bg + ";" + 
														"font-size: " + this.fontSize + "px;" +
														"position: absolute";

		document.body.insertBefore(element, document.querySelector('script'));
		return element;

	} else if (this.selector[0] === '#') {
		
		let element = document.createElement('p');
		element.textContent = "Был создан параграф";

		//Вставка css-свойств
		element.style.cssText = "height: " + this.height + "px;" + 
														"width: " + this.width + "px;" + 
														"background: " + this.bg + ";" + 
														"font-size: " + this.fontSize + "px;";

		document.body.insertBefore(element, document.querySelector('script'));
		return element;
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

