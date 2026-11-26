setTimeout(() => {
    let obj = {
        a: "Haha",
        b: "Hey"
    }
    console.log(obj)

}, 1000);


class Aryan {
    constructor(Name) {
        this.Name = Name
        console.log("Instilization DB Now...")

    }
    Hello() {
        console.log("Hey Yaar Mai To Akela Hu")

    }
    HiAryan() {
        console.log("Abe Yaar Koi To Bachao Im Under In Water💦")

    }
}

// A instanceof Aryan
// true
class AryanS extends Aryan {
    constructor(Name) {
        super(Name)
        console.log("Hacking Instilization... Ready For it")
    }
    Hello() {
        super.Hello()
        console.log("Coming Soon Team Aryanlabs")

    }
} let A = new Aryan("Aryan Singh");
A.Hello()
let B = new AryanS("Hey This IS Aryanlabs");
B.HiAryan()
B.Hello