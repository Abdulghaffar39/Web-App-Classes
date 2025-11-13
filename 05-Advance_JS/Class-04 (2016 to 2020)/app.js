// ==========================================================================

// ------------------------- Started 2016 -----------------------------------

// ------------ Exponentiation Operator ---------------

// ** operator pehle number ko doosre number ki taqat par raise karta hai.

// ---------- ** -----------

// let x = 5;

// console.log(x ** 2);
// console.log(x ** 3);


// ---------- Math.pow() -----------

// let x = 5;
// console.log(Math.pow(x, 2));


// x ** y produces the same result as Math.pow(x, y):

// ------------ Exponentiation Assignment ---------------

// The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.

// ---------- **= -----------

// let x = 5;
// console.log(x **= 2);

// -------------------------- Ended 2016 ------------------------------------

// ------------------------- Started 2017 -----------------------------------

// ------------ The padStart() / padEnd() Method ---------------

// padStart() / padEnd() method string ke start/end se extra characters add karta hai taake string ek specified length tak pohonch jaye.

// let text = "5";

// console.log(text.padStart(5,"0"));
// console.log(text.padEnd(5,"0"));


// ------------ getOwnPropertyNames() ---------------

// Object.getOwnPropertyNames() ek array return karta hai jisme object ke saare properties ke naam hote hain, chahe wo loop me dikhen ya na dikhen.

// const person = {
//   name: "John",
//   lname: "Dow",
//   get greeting() {
//     return "Hello " + this.name + " " + this.lname;
//   }
// };

// console.log(Object.getOwnPropertyNames(person));

// -------------------------- Ended 2017 ------------------------------------

// ------------------------- Started 2018 -----------------------------------

// ------------ Array Rest operator (...) ---------------

// JavaScript me use hota hai jab hum kisi array ya object ko destructure karte hain. Ye operator baqi bache huye elements ko ek nayi array (ya object) me jama kar leta hai.

// let a, b, rest;
// const arr1 = [1,2,3,4,5,6,7,8];
// [a, b, ...rest] = arr1;
// console.log(rest);

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...baqi] = numbers;

// console.log(first);  // 1  
// console.log(second); // 2  
// console.log(baqi);   // [3, 4, 5]


// ------------ Object Rest Properties ---------------


// // Create an Object:
// const car = { type: "Fiat", model: "500", color: "white" };

// // Destructure the Object
// let { type, model, color } = car;
// console.log(type);


// -------------------------- Ended 2017 ------------------------------------

// ==========================================================================