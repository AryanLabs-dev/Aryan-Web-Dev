let a = 5;
let b = 8;
let operator = "+";

let random = Math.random();

if (random < 0.1) {
    console.log("⚠️ Faulty Mode");

    if (operator == "+") {
        console.log(a - b);
    }
    else if (operator == "-") {
        console.log(a / b);
    }
    else if (operator == "*") {
        console.log(a + b);
    }
    else if (operator == "/") {
        console.log(a ** b);
    }
    else {
        console.log("Invalid Operator");
    }

} else {
    console.log("✅ Normal Mode");

    if (operator == "+") {
        console.log(a + b);
    }
    else if (operator == "-") {
        console.log(a - b);
    }
    else if (operator == "*") {
        console.log(a * b);
    }
    else if (operator == "/") {
        console.log(a / b);
    }
    else {
        console.log("Invalid Operator");
    }
}