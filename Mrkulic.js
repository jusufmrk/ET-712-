/*
 Homework 1: control flow and loops
 Student’s name: Jusuf
*/
console.log("\n----- Program 1: conditional statement -----");

let input = prompt("Enter a number:"); 
if (input === null) {
    console.log("Null and void!");
} else if (input === "") {
    console.log("Your answer was blank!");
} else {
    let number = Number(input);

    if (isNaN(number)) {
        console.log("That's not a valid number.");
    } else if (number > 0) {
        console.log("Think positively!");
    } else if (number < 0) {
        console.log("Never have negative balance!");
    } else if (number === 0) {
        console.log("Yin and Yang!");
    }
}
console.log("\n----- Program 2: for loop and nested conditional statement -----");

let numbers = [];
for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number ${i + 1}:`);
    if (input === null || input === "" || isNaN(Number(input))) {
        console.log("Invalid input. Try again.");
        i--; // repeat this iteration
    } else {
        numbers.push(Number(input));
    }
}

let count3 = 0, count5 = 0, count7 = 0;

for (let num of numbers) {
    if (num % 3 === 0) count3++;
    if (num % 5 === 0) count5++;
    if (num % 7 === 0) count7++;
}

console.log(`${count3} numbers are multiple of 3`);
console.log(`${count5} numbers are multiple of 5`);
console.log(`${count7} numbers are multiple of 7`);
