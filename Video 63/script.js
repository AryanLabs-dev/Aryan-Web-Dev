document.querySelector(".container").insertAdjacentHTML("afterbegin", "<h1>Hello World!</h1>")
document.querySelector(".box").append("hello")
document.querySelector(".box").before("Hello ")
document.querySelector(".box").after("hello")
document.querySelector(".box").remove("hello")
alert("Hey Aryan, Congrats")
document.querySelector(".container").nodeName //boths Selcectors does same word
document.querySelector(".container").tagName  //boths Selcectors does same word
document.querySelector(".container").ATTRIBUTE_NODE
let Ident = document.querySelector("#Id").style.color = "#ff1818"
// document.querySelector(".box").style.backgroundColor = "rgb(18, 137, 255)"

document.addEventListener('DOMContentLoaded', function () {
    const toggleInput = document.querySelector('.switch input');

    toggleInput?.addEventListener('change', function () {
        if (this.checked) {
            console.log('Toggle is ON');
            document.body.style.backgroundColor = "rgb(5, 5, 5)";
            document.body.style.color = "white";
            
        } else {
            console.log('Toggle is OFF');
            document.body.style.color = "black";

            document.body.style.backgroundColor = "white";
        }
    });
});