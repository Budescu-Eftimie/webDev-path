// Looping a Triangle

let val = "";
for (let i = 0; i < 7; i++) {
	val += "#";
	console.log(val);
}

// FizzBuzz

for (let i = 0; i < 101; i++) {
	if (i % 3 == 0) console.log("Fizz", i);
	if (i % 5 == 0 && i % 3 != 0) console.log("Buzz", i);
	if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz", i);
}
