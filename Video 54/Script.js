let random = Math.random()
let a = prompt("Enter Your First Number")
let b = prompt("Enter Your First Number")
let c = prompt("Enter Your First Number")

let obj = {
    "+": "-",
    "*": "+",
    "/": "-",
    "/": "**",
}
console.log(random)
if (random > 0.1){
    console.log(`The Result is ${a}${b}${c}`)
    alert(`The Result is = ${eval(`${a} ${b} ${c}`)}`)
}
else {
    b = obj[b]
    alert (`The result is ${eval (`${a} ${b} ${c}`)}`)
}