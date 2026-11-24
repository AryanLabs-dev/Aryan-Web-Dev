const logs = [
    "Hacking Instilization...",
    "Your All Passwords And Cookies Are Leaked...",
    "ThankYou For Sharing ❤️..."
]
 
logs.forEach((Aryan,Singh)=>{
    setTimeout(() => {
        console.log(Aryan)
    }, Singh*1500);
})

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Data loaded successfully!");
        } else {
            reject("Something went wrong!");
        }
    }, 1500);

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
