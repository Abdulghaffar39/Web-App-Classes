// ========================================================================================

// -------------------------- Javascript 2015 (ES6) Version -------------------------------


// // --------- let -------------

// let value = "HELLO WORLD"
// console.log(value);


// // --------- const -------------

// const value = "HELLO WORLD"
// console.log(value);

// // --------- Arrow function -------------

// // Without Arrow function
// let box = function(a, b) { return a * b; }

// console.log(box(4, 3));


// // Arrow function
// box = (a, b) => a * b;

// console.log(box(4, 3));


// // --------- Object Destructuring -------------

// // Create an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// // Destructuring Assignment
// let { firstName, age } = person;
// console.log(firstName + ' is ' + age + " year old");


// // --------- Array Destructuring -------------

// // Create an Object
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Destructuring Assignment
// let [fruit1, fruit2] = fruits;
// console.log(fruit1 + ' and ' + fruit2 + " is my favorit fruit");


// // --------- The Spread (...) Operator -------------

// const numbers = [23,55,21,87,56];
// let minValue = Math.min(...numbers);
// let maxValue = Math.max(...numbers);

// console.log(minValue); // 21
// console.log(maxValue); // 87


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]


// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Dec"];

// const year = [...q1, ...q2, ...q3, ...q4];

// console.log(year);
// // Answer [
// //   'Jan', 'Feb', 'Mar',
// //   'Apr', 'May', 'Jun',
// //   'Jul', 'Aug', 'Sep',
// //   'Oct', 'Nov', 'Dec'
// // ]


// // --------- The For/Of Loop -------------

// JavaScript ka for/of loop cheezon ke andar maujood values ko ek ek karke dekhta hai. aapko aise data structures par loop lagane deta hai jo iterable hote hain — jaise Arrays, Strings, Maps, NodeLists, aur aur bhi.

// let devices = ['dev1', 'dev2', 'dev3', 'dev4', 'dev5']
// let get_value = "";

// for (let x of devices){
//     get_value += x + "<br>";
// }
// console.log(get_value);


// let language = "JavaScript";
// let text = "";

// for (let x of language){
//     text += x + " ";
// }
// console.log(text);


// // --------- Map -------------

// Map ek object hai jo data ko key-value pairs me store karta hai. Isme keys kisi bhi type ki ho sakti hain, aur ye keys ka order yaad rakhta hai.

// // Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// console.log(fruits.get("apples"));


// // --------- Using a Class -------------

// class Car {

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);

// console.log(myCar1.name + " " + myCar2.name);


// // --------- Promise Object -------------

// const myPromise = new Promise(function (myResolve, myReject) {

//     setTimeout(function () { myResolve("I love You !!"); }, 3000);
// });

// myPromise.then(function (value) {

//     console.log(value);
// });


// // --------- Default Parameter Values -------------

// function myFunction(x, y = 10) {

//   return x + y;
// }

// console.log(myFunction(2));


// // --------- Function Rest Parameter -------------

// Rest parameter (...) function ko ye mauqa deta hai ke wo unlimited arguments ko ek array ke tor par handle kare.

// function value(...args) {

//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
// }

// console.log(value(4, 9, 16, 25, 29, 100, 66, 77));


// // --------- String.includes() -------------

// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world")); // Returns true


// // --------- String.startsWith() -------------

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello")); // Returns true
// console.log(text.startsWith("welcome")); // Returns true


// // --------- Array entries() -------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//     console.log(x);
// }


// // --------- Array.from() -------------

// ek nayi array banata hai kisi bhi iterable ya array jaisi (array-like) cheez se — matlab aisi cheez jisme length property ho ya jisko loop kiya ja sakta ho (jaise string, set, ya map).


// let text = "ABCDEFG" + "HIJKL" + 'MNOPQR';
// console.log(Array.from(text));

// //  Answer [
// //   'A', 'B', 'C', 'D', 'E',
// //   'F', 'G', 'H', 'I', 'J',
// //   'K', 'L', 'M', 'N', 'O',
// //   'P', 'Q', 'R'
// // ]


// // --------- Array keys() -------------

// Kaam: Array ke indexes (0, 1, 2…) ko deta hai.
// Return: Ek iterator object, jise loop me use kar sakte ho.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
//     text += x + "<br>";
// }

// console.log(text);


// // --------- Array find() -------------

// const numbers = [4, 9, 16, 25, 29];
// let first1 = numbers.find(myFunction1);
// let first2 = numbers.find(myFunction2);

// function myFunction1(value, index, array) {

//   return value > 18;
// }

// function myFunction2(value, index, array) {

//   return index;
// }

// console.log(first1);
// console.log(first2);


// // --------- Array find() -------------

// // The Math.trunc() Method
// console.log(Math.trunc(4.9));   // returns 4
// console.log(Math.trunc(-4));  // returns -4

// // The Math.sign() Method
// console.log(Math.sign(-4));   // returns -1
// console.log(Math.sign(0));  // returns 0
// console.log(Math.sign(4));  // returns 1

// // The Math.cbrt() Method
// console.log(Math.cbrt(8));   // returns 2
// console.log(Math.cbrt(125));  // returns 5

// // The Math.log2() Method
// console.log(Math.log2(2));   // returns 1
// console.log(Math.log10(10));   // returns 1


// // --------- Array find() -------------

// let Number1 = Number.isInteger(10);
// let Number2 = Number.isInteger(10.5);

// console.log( Number1 , Number2 );


// // --------- The isFinite() Method -------------

// let Number1 = Number.isFinite(10 / 0);
// let Number2 = Number.isFinite(100 / 23);

// console.log( Number1 , Number2 );


// // --------- JavaScript Object.assign() -------------

// console.log( isNaN("Hello"));       // returns true 
// console.log( isNaN("10"));       // returns true 


// // --------- JavaScript Object.assign()) -------------

// Object.assign() method ek ya zyada source objects ke properties ko target object me copy karta hai.

// Create Target Object
const person1 = {

    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = { 

    firstName: "Anne", 
    lastName: "Smith" 
};

// Assign Source to Target
console.log(Object.assign(person1, person2));







// ========================================================================================