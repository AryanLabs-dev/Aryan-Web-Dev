// let array = [
//             "Initializing Hacking...",
//             "Reading your Files...",
//             "Password files Detected...",
//             "Sending all passwords and personal files to server...",
//             "Cleaning up..."]
// let Box = document.body.querySelector("#dots")
// const randDelay = () => {
//                 return new Promise((resolve) => {
//                     let rand = Math.floor(Math.random() * 7) + 1;
//                     setTimeout(() => {
//                         resolve()
//                 }, rand * 1000);
//             })
// };
// async function Main() {
//             for (const items of array) {
//                 await randDelay()
//                 console.log(items)
//                 if (Box) {
//                     let p = document.createElement("p");
//                     p.innerText = items
//                     Box.append(p)
//                 }
//             }
// }
// Main()
let array = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

let Box = document.body.querySelector("#dots");

const randDelay = () => {
    return new Promise((resolve) => {
        let rand = Math.floor(Math.random() * 7) + 1;
        setTimeout(() => {
            resolve();
        }, rand * 400);
    });
};

async function Main() {
    // 1. Start a timer that adds/resets dots on the last <p> tag every 400ms
    let dotInterval = setInterval(() => {
        if (Box && Box.lastElementChild) {
            let lastP = Box.lastElementChild;
            if (lastP.innerText.endsWith("...")) {
                lastP.innerText = lastP.innerText.slice(0, -3);
            } else {
                lastP.innerText += ".";
            }
        }
    }, 400);

    // 2. Loop through each message with the random delay
    for (const items of array) {
        await randDelay();
        console.log(items);

        if (Box) {
            // Ensure the previous finished line ends cleanly with "..."
            if (Box.lastElementChild && !Box.lastElementChild.innerText.endsWith("...")) {
                Box.lastElementChild.innerText = Box.lastElementChild.innerText.replace(/\.+$/, "") + "...";
            }

            let p = document.createElement("p");
            p.innerText = items;
            Box.append(p);
        }
    }

    // 3. Stop the blinking once the final message finishes
    await randDelay();
    clearInterval(dotInterval);
    if (Box && Box.lastElementChild) {
        Box.lastElementChild.innerText = Box.lastElementChild.innerText.replace(/\.+$/, "") + "...";
    }
}

Main();

//     ‹!--Create a hacking simulator which has messages with random delay of 1 to 7 seconds
// green background The three dots must blink so that it looks like a real terminal