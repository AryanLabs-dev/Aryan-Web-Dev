let first;
let second;
let third;

let random1 = Math.floor(Math.random() * 3) + 1;
let random2 = Math.floor(Math.random() * 3) + 1;
let random3 = Math.floor(Math.random() * 3) + 1;

// Adjective
if (random1 == 1) {
    first = "Crazy";
} else if (random1 == 2) {
    first = "Amazing";
} else {
    first = "Fire";
}

// Shop Name
if (random2 == 1) {
    second = "Engine";
} else if (random2 == 2) {
    second = "Foods";
} else {
    second = "Garments";
}

// Another Word
if (random3 == 1) {
    third = "Bros";
} else if (random3 == 2) {
    third = "Limited";
} else {
    third = "Hub";
}

console.log("Business Name:");
console.log(first + " " + second + " " + third);