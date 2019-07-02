let argument = prompt("Введите строку: ");

function processingString(str) {
	if(Number(str).toString() !== "NaN") {
		console.log(str, " - не строка!");
		return;
	}

	modifiedStr = str.trim();

	if(modifiedStr.length > 30) {
		modifiedStr = modifiedStr.substr(0, 30) + "...";
	}

	return modifiedStr;
}
console.log(processingString(argument));
