let array = ["Akhand Pratap Singh", "Aryan", "Mr Slager"]
let Females = ["Anokhi Singh", "Garima", "Priya"]
let males = ["Akhand Pratap Singh", "Aryan", "Mr Slager"]
let female = ["Anokhi Singh", "Garima", "Priya"]
array.push("Hello bhai kya Haal Chaal", "Aryan Singh")
console.log(array);

array.pop()
console.log(array);

array.unshift("Akhand Prata Singh")
console.log(array)
array.shift()
console.log(array);

let Genders = array.concat(Females, female, males)

console.log(Genders)
let fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 1);

console.log(fruits);
let fruits = ["Apple", "Mango", "Banana", "cherry"];
console.log(fruits.indexOf("cherry"));
output: False
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Cherry"));
output: True
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Banana"));
let recallingFruits = ["Mango","banana" , "Black Cherry", "Blue Berry"]
let GroupF = recallingFruits.join(" - ")
console.log(GroupF)
let nummbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let Num = nummbers.reverse()
console.log(Num)
let numbers = [40, 10, 100, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);
