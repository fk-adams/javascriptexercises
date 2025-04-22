let fn = prompt("Enter a number");
let op = prompt("Enter an operator e.g +, -, *");
let ln = prompt("Enter another number");
fn = Number(fn);
ln = Number(ln);



let result;

if (op === "+") {
    result = fn + ln;
}else if (op === "-") {
    result = fn - ln;
}else if (op === "*") {
    result = fn * ln;
}else if (op === "/") {
    if (ln !== 0) {
        result = fn / ln;
    }
}else {
    result = "fill the field correctly";
}

alert("The answer is " + result);