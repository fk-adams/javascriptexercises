// let age = prompt("Dog age checker. Enter your human age to find out:");
// age = Number(age);
// let dogyrs = alert("You are "+ age*7 + " in dog years" );

let age = prompt("Dog age checker. Enter your human age to find out:");
age = Number(age);
let dogyrs = alert("You are " + age*7 + " in dog years");

if (age <= 0) {
    alert("You have to be one year old or above");
}else if (!age) {
    alert ("Please enter your age in numbers");
}


