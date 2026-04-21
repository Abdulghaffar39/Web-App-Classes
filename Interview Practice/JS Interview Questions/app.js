// var / let / const (B/W)

function variable() {

    if (true) {

        var num1 = 30;
        let num2 = 30;
        const num3 = 30;

    }
    // console.log(num1);
    // console.log(num2); // Error
    // console.log(num3); // Error

}
variable()

// ---------------------------------------------------------

// var
var newUser = "abdul"
var newUser = "samad"
console.log(newUser); // ✔

// ---------------------------------------------------------

// let

// let username = "Abdul Ghaffar"
// let username = "Abdul Basit"
// console.log(username); // ❌


let username = "Abdul Ghaffar"
username = "Abdul Basit"
console.log(username); // ✔

// ---------------------------------------------------------

// let

// const username = "Abdul Ghaffar"
// const username = "Abdul Basit"
// console.log(username); // ❌


// const username = "Abdul Ghaffar"
// username = "Abdul Basit"
// console.log(username); // ❌


const user = {
    name: "Ali",
    age: 20
};

user.age = 25   // allowed (update inside object)

console.log(user);  // ✔


// ---------------------------------------------------------

// map(), filter() & reduce()



// ---------------------------------------------------------