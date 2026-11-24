async function GetData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(404)
        }, 2000);
    }
    )
}
// async function Cont() {
//     console.log("Hey Developers")
//     console.log("Hey This is For You")
//     console.log("How Is Our Platform?...")
//     const Data = await GetData()
//     console.log(Data)
//     console.log("Data is Loading")
//     console.log("Backend is Connecting to Server...")
//     console.log("Server Started...")
// }
// Cont()
async function Cont2() {
    // let X = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
   let X = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
    })

    let Xdata = await X.json()
    return Xdata
}
// It is Another Way!!! to do that
async function XMain() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let Xdata = await GetData()

    console.log(Xdata)

    console.log("process data")

    console.log("task 2")

}

XMain()

// console.log("Hey Developers")
// console.log("Hey This is For You")
// console.log("How Is Our Platform?...")
// console.log("Data is Loading")
// const Data = await GetData()
// console.log(Data)
// console.log("Backend is Connecting to Server...")
// console.log("Server Started...")