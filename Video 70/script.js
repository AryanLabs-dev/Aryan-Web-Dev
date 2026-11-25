try {
    alert("Enter Your Number Which you Want To Add")
    let a = parseInt(prompt("Enter You Number"));
    let b = parseInt(prompt("Enter Your Next Number"));
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input! Please enter valid numbers only.");
    }
    let sum = a + b
    alert(`the total is ${sum}`)
} catch (error) {
    alert("Error Bhaiya Aaye Hai Yaar: " + error.message);

}
