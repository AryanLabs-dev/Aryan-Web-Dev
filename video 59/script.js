let array = [1, 2, 3, 4, 5, 6]
const value = (a, b) => {
    return a * b
}
console.log(array.reduce(value)); // output: 720

let array1 = [10, 11, 13, 14, 15, 16]
const value1 = (a, b) => {
    return a * b
}
console.log(array1.reduce(value1)); // output: 4804800

let array2 = [9, 8, 7, 6, 5, 4]
const value2 = (a, b) => {
    return a * b
}
console.log(array2.reduce(value2)); // output: 60480

let array3 = [10,9,8,7,6,5]
const value3 = (a, b) => {
    return a * b
}
console.log(array3.reduce(value3)); // output: 151200