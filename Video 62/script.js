document.querySelectorAll(".box").forEach(Aryan =>{
    let h = Math.floor(Math.random() * 256)
    let e = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    Aryan.style.backgroundColor = `rgb(${h},${e},${y})`
});