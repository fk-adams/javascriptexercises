// let Exercise = alert("This is Exercise 6")
let score = prompt("Enter your score in numbers (0-100)");

if (score >= 70 && score <= 100) {
    alert("Excellent result, Bravo!");
} else if (score >= 50 && score <= 69) {
    alert("Good Job, you can do better though");
} else if (score >= 49 && score <= 40) {
    alert("You need to buckle up");
} else if (score < 39) {
    alert("Olodo rabata, Oju eja lo mo je, shay shay shay SHAME!!!");
}
else {
    alert("score must be between 0-100")
}

