// let score = 55;
/*This is our practice Question2 of javascript */
let score = prompt("Enter Your Score: ");
let Grade; // Variable to store the grade
if (score >= 80 && score <= 100) {
    Grade = "A Congratulations!";
}
else if (score >= 70 && score < 89) {
    Grade = "B";
}
else if (score >= 60 && score < 69) {
    Grade = "C";
}
else if (score >= 50 && score < 59) {
    Grade = "D";
}
else if(score >= 0 && score < 49) {
    Grade = "F";
}
console.log("Your grade is " + Grade);