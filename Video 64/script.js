document.querySelectorAll(".box").forEach(Aryan =>{
    let b = Math.floor(Math.random() * 256);
    let o = Math.floor(Math.random() * 256);
    let x = Math.floor(Math.random() * 256);
    Aryan.style.backgroundColor = `rgb(${b},${o},${x})`;
    let b2 = Math.floor(Math.random() * 256);
    let o2 = Math.floor(Math.random() * 256);
    let x2 = Math.floor(Math.random() * 256);
    Aryan.style.color = `rgb(${b2},${o2},${x2})`;
})

