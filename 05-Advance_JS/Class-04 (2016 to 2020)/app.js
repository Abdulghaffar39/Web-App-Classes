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
// const car = {type:"Fiat", model:"500", color:"white"};
// // Destructure the Object
// let {type, model, color} = car;

// console.log(type);
// console.log(model);
// console.log(color);

// -------------------------- Ended 2018 ------------------------------------

// ------------------------- Started 2019 -----------------------------------

// ------------ JavaScript Strings ---------------

// The trimStart() Method
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();

// console.log(text2.length);
// console.log(text1.length);

// The trimEnd() Method
// let text3 = "     Hello World! all developers     ";
// let text4 = text3.trimEnd();

// console.log(text3.length);
// console.log(text4.length);


// ------------ Object.fromEntries() Method ---------------

// const fruits = [

//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);
// console.log(myObj.pears);


// ------------ JavaScript Array flatMap() ---------------

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);

// console.log(newArr);


// ------------ Stable Array sort() ---------------


// const myArr = [
//   {name:"X00",price:100 },
//   {name:"X01",price:120 },
//   {name:"X02",price:110 },
//   {name:"X03",price:140 },
//   {name:"X04",price:130 },
// ];

// myArr.sort( (p1, p2) => {
//   if (p1.price < p2.price) return -1;
//   if (p1.price > p2.price) return 1;
//   return 0;
// });

// console.log(myArr);

// -------------------------- Ended 2019 ------------------------------------

// ------------------------- Started 2020 -----------------------------------

// ----------------------- JavaScript Numbers ----------------------------


// --------- Integer Precision -----------

// Integers — yani woh numbers jin mein decimal point ya exponent hota nahin — 15 digits tak bilkul theek (accurate) hotay hain.

// // 15 digits:
// let x = 999999999999999;

// // 16 digits:
// let y = 9999999999999999;

// console.log(x , y);


// ------------ Integer and BigInt ---------------

// BigInt bohat bari size ke integers ko handle karta hai—matlab woh numbers jo normal integer ki limit se zyada lambi digits rakhte hain. BigInt se aap unlimited bara number store kar sakte hain.

// let x = 9999999999999999;
// let y = BigInt("9999999999999999");

// console.log(x , y);


// ------------ Creating BigInts ---------------

// Dono lines aik hi bara number BigInt ki form mein banati hain—bas likhne ka tareeqa mukhtalif hai.

// let x = 12345678901234567890n;
// let y = BigInt("12345678901234567890");

// console.log(x , y);


// ------------ BigInt typeof ---------------

// let x = BigInt("9999999999999999");
// console.log(typeof(x));

// ----------------------- JavaScript String matchAll() ----------------------------


// --------- matchAll() Method -----------

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator = text.matchAll("Cats");

// console.log(Array.from(iterator));


// ------------ Integer and BigInt ---------------

// BigInt bohat bari size ke integers ko handle karta hai—matlab woh numbers jo normal integer ki limit se zyada lambi digits rakhte hain. BigInt se aap unlimited bara number store kar sakte hain.

// let x = 9999999999999999;
// let y = BigInt("9999999999999999");

// console.log(x , y);


// ------------ Creating BigInts ---------------

// Dono lines aik hi bara number BigInt ki form mein banati hain—bas likhne ka tareeqa mukhtalif hai.

// let x = 12345678901234567890n;
// let y = BigInt("12345678901234567890");

// console.log(x , y);


// ------------ BigInt typeof ---------------

// let x = BigInt("9999999999999999");
// console.log(typeof(x));


// -------------------------- Ended 2020 ------------------------------------

// ==========================================================================