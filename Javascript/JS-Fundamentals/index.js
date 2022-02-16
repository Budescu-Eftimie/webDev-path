console.log(Math.min(2, 4));

// conditional execution

let number = Number(prompt("pick up a number"));
if (!isNaN(number)) console.log(`your number is ${number}`);
else alert("Hey giv me a number");

// do while loop

do {
	var yourName = prompt("Whats y name?");
} while (!yourName);
console.log(yourName);

// for loop

for (let i = 1; ; i++) {
	console.log(i);

	if (i % 7 == 0) break;
}

// switch statement

switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("remember to bring an umbrela");
		break;
	case "cloudy":
		console.log("Dress lightly");
	case "suny":
		console.log("Go outside");
		break;
	default:
		console.log("Unknown weather");
		break;
}
