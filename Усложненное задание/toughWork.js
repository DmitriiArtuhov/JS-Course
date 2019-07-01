const lang = prompt("Какой язык? || Which language? - \'ru\', \'en\'");

const daysRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
		daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// A

if (lang === "ru") {
	console.log(daysRu); //- Можно вывести циклом
} else if(lang === "en") {
	console.log(daysEn); //- Тоже можно через цикл
} else {
	console.log("I don't know this language!");
}

// B

switch (lang) {
	case "ru":
		console.log(daysRu);
		break;
	case "en":
		console.log(daysEn);
		break;
	default:
		console.log("I don't know this language!");
}

// C
const twoDimensionalArray = [
	["ru", ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]],
	["en", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]]
]

twoDimensionalArray.filter(i => {
	i[0] === lang ? console.log(i[1]) : console.log("Не совпадение языка c " + i[0]);
});


const personName = prompt("Пожалуйста, представтесь:");

personName === "Артем" ? console.log("Директор") : personName === "Максим" ? console.log("Преподаватель") : console.log("Студент");