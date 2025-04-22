let Exercise = alert("This is Exercise 7")
let guess = prompt("Guess a number between 1-5 (input your answer in numbers)");
guess = Number(guess);
if (guess === 4) {
    alert("Correct! How did you do that?");
}else if (guess >= 1 && guess <= 5) {
    alert("Better luck next time champ!");
}else {
    alert("Your number must be between 1-5");
}