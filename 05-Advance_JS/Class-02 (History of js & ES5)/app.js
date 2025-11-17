// -----------------------------------------------------------------------------------------------------

// History of javascript

// JavaScript ka ijaad 1995 mein Brendan Eich ne kiya tha.
// Ye Netscape 2 ke liye tayar ki gayi thi, aur 1997 mein ECMA-262 standard ban gayi.
// Jab **Netscape** ne **JavaScript** ko **ECMA** ke hawale kar diya, to uske baad **Mozilla Foundation** ne **Firefox browser** ke liye JavaScript ka development jaari rakha.
// Mozilla ka aakhri version ** 1.8.5 ** tha, jo ** ES5 ** ke barabar(identical) tha.
// **Internet Explorer (IE4)** pehla browser tha jisne **ECMA-262 Edition 1 (ES1)** ka support diya tha.

// 1995 to 2018 History

// 1995        JavaScript ka ijaad Brendan Eich ne kiya
// 1996        Netscape 2 JavaScript 1.0 ke sath release hui
// 1997        JavaScript ECMA standard (ECMA-262) ban gayi
// 1997   ES1  ECMAScript 1 release hua
// 1997   ES1  IE 4 pehla browser tha jisne ES1 ka support diya
// 1998   ES2  ECMAScript 2 release hua
// 1998        Netscape 42 JavaScript 1.3 ke sath release hui
// 1999   ES2  IE 5 pehla browser tha jisne ES2 ka support diya
// 1999   ES3  ECMAScript 3 release hua
// 2000   ES3  IE 5.5 pehla browser tha jisne ES3 ka support diya
// 2000        Netscape 62 JavaScript 1.5 ke sath release hui
// 2000        Firefox 1 JavaScript 1.5 ke sath release hua
// 2008   ES4  ECMAScript 4 ko chhod diya gaya (abandon kar diya gaya)
// 2009   ES5  ECMAScript 5 release hua
// 2011   ES5  IE 9 pehla browser tha jisne ES5 ka support diya *
// 2011   ES5  Firefox 4 JavaScript 1.8.5 ke sath release hua
// 2012   ES5  Safari 6 mein ES5 ka poora support mila
// 2012   ES5  IE 10 mein ES5 ka poora support mila
// 2012   ES5  Chrome 23 mein ES5 ka poora support mila
// 2013   ES5  Firefox 21 mein ES5 ka poora support mila
// 2013   ES5  Opera 15 mein ES5 ka poora support mila
// 2014   ES5  Tamam browsers mein ES5 ka poora support mil gaya
// 2015   ES6  ECMAScript 6 release hua
// 2016   ES6  Chrome 51 mein ES6 ka poora support mila
// 2016   ES6  Opera 38 mein ES6 ka poora support mila
// 2016   ES6  Safari 10 mein ES6 ka poora support mila
// 2017   ES6  Firefox 54 mein ES6 ka poora support mila
// 2017   ES6  Edge 15 mein ES6 ka poora support mila
// 2018   ES6  Tamam browsers mein ES6 ka poora support mil gaya **


// -----------------------------------------------------------------------------------------------------

// =====================================================================================================

// Javascript 2009 (ES5) Version

// ---------------------------------------------------------------------------------------------------

// "use strict"
// Strict mode JavaScript ka ek version hai jo code ko zyada secure aur kam error-prone banata hai



// // --------- charAt -------------
// var str = "HELLO WORLD"
// console.log(str.charAt(0)); // H

// // ----------- Without charAt --------
// var str = "HELLO WORLD"
// console.log(str[0]); // H

// // ------------ Object --------------
// var obj = { name: "Abdul", new: "yes" };
// console.log(obj.new);  // yes

// ------------- trim() -------------------
// JavaScript ka ek method hai jo string ke start aur end se extra spaces (whitespace) ko remove karta hai, lekin string ke beech ke spaces ko nahi hataata.

// let text1 = "     Hello World!     ";

// console.log(text1);
// console.log(text1.trim()); // Romove Space


// // ---------- isArray() Method ---------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// result = Array.isArray(fruits);

// console.log(result);


// // ---------- forEach() Method ---------------

// const numbers = [45, 4, 9, 16, 25];
// let txt1 = "";
// let txt2 = "";
// let txt3 = "";

// numbers.forEach(myfunction)

// function myfunction(value, index, array){

//     txt1 += value;
//     txt2 += index;
//     txt3 += array;
// }

// console.log(txt1);
// console.log(txt2);
// console.log(txt3);


// // ---------- Map Method ---------------

// // Map ek aisa object hai jo keys aur unki values ko store karta hai aur yaad rakhta hai ke keys ko kis order mein daala gaya tha.

// const numbers = [4, 8, 16, 32 , 64, 128, 256, 512];

// const newArr = numbers.map(Math.sqrt);
// const sortArray  = numbers.map((e) =>{

//     return e;
//     // return e > 18;
//     // return e === 200;
// })

// console.log(newArr);
// console.log(sortArray );


// // ---------- reduce() Method ---------------

// const numbers = [45, 4, 9, 16, 25, 1];

// let sum = numbers.reduce(myfunction)

// function myfunction(total, value){

//     return total + value;
// }

// console.log(sum);


// // ---------- some() Method ---------------

// some()
// method JavaScript mein array ke elements ko check karta hai aur verify karta hai ke kya kam az kam ek element specified test (condition) ko pass karta hai.


// let numbers = [1, 3, 4, 7];
// let hasEven = numbers.some(num => num % 2 === 0);

// function myfunction(num){

//     num % 2 === 0
// }

// console.log(hasEven); // Output: true


// // ---------- indexOf() Method ---------------

// // indexOf()
// method JavaScript mein array ya string mein kisi specified value ka pehla index (position) return karta hai.
// // Agar value maujood ho, to uska index return hota hai.
// // Agar value maujood na ho, to -1 return hota hai.


// const fruits = ["Apple", "Orange", "Apple", "Mango"];

// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Mango"));
// console.log(fruits.indexOf("grape"));


// // ---------- lastIndexOf() Method ---------------

// // lastIndexOf()
// method JavaScript mein array ya string mein kisi specified value ka aakhri (last) index return karta hai.


// const fruits = ["Apple", "Orange", "Apple", "Mango"];

// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.lastIndexOf("grape"));


// // ---------- JSON.parse() Method ---------------

// // JSON.parse() 
// method JavaScript mein ek JSON string ko JavaScript object mein convert karta hai.
// Ye tab use hota hai jab server se ya kisi source se JSON data string ke form mein mile.
// Agar string valid JSON na ho, to ye error throw karta hai.

// const txt = '{"name":"Abdul", "age":30, "city":"New York"}'
// console.log(txt);
// console.log(JSON.parse(txt));


// // ---------- JSON.stringify() Method ---------------

// // JSON.stringify()
// method JavaScript mein ek JavaScript object ko JSON string mein convert karta hai.
// Ye tab use hota hai jab object ko server par bhejna ho ya local storage mein save karna ho.

// const txt = {"name":"Abdul", "age":30, "city":"New York"};
// console.log(txt);
// console.log(JSON.stringify(txt));


// // ---------- JSON.stringify() Method ---------------

// // Date.now()
// JavaScript mein January 1, 1970 00:00:00 UTC se ab tak guzre hue milliseconds ka number return karta hai.

// console.log(new Date());


// // ---------- toISOString() Method ---------------

// // toISOString() 
// method JavaScript mein Date object ko ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) ki string mein convert karta hai.
// Ye method UTC time ke hisaab se date aur time return karta hai.

// const d = new Date()
// console.log(d.toISOString());


// // ---------- Date to JSON() Method ---------------

// // Date to JSON() 
// JSON dates ka format ISO-8601 standard ke mutabiq hota hai:

// const d = new Date()
// console.log(d.toJSON());


// // ---------- Getters and Setters Properties ---------------

// Getters aur setters aapko properties ko methods ke zariye get aur set karne ki ijazat dete hain.

// const Person = {

//     firstName: "Abdul",
//     lastName: "Ghaffar",
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(Person.fullName);


// // ---------- Setters Properties ---------------

// // Setters Properties
// Setter properties JavaScript mein special methods hote hain jo object ki property ki value set karne ke liye use hote hain.


// const Person = {
//     firstName: "Abdul",
//     lastName: "Ghaffar",
//     language: "NO",
//     set lang(value) {
//         this.language = value.toUpperCase();
//     }
// };

// Person.lang = "urdu";
// // Person.lang = "en";

// console.log(Person.language);


// // ---------- Object.create() ---------------

// // Object.create()
// Object.create() JavaScript mein ek naya object banata hai jo ek existing object ko prototype ke taur par use karta hai.
// Is se aap inheritance achieve kar sakte hain.
// Pehle object ke properties aur methods nayi object mein automatically available ho jate hain.

// const person = {
//   firstName: "Abdul",
//   lastName: "Ghaffar",
//   language: "EN"
// };
// console.log(Object.create(person));

// // Create new Object
// const man = Object.create(person);
// man.firstName = "Peter";

// console.log(man);


// // ---------- Object.keys() ---------------

// // Object.keys() 
// method JavaScript mein ek array return karta hai jo object ki saari keys (property names) contain karti hai.

// // Create an Object
// const person = {
//   firstName: "Abdul",
//   lastName: "Ghaffar",
//   age: 50,
//   eyeColor: "blue"
// };

// // Get the Keys
// console.log(Object.keys(person));


// // ---------- Function bind()  ---------------

// // Function bind()  
// JavaScript mein ek method hai jo ek object ko dusre object ka method borrow karne ki ijazat deta hai.
// borrow: Yani, ek object dusre object ke function ko apne liye call kar sakta hai

// const person = {

//     firstName: "Abdul",
//     lastName: "Ghaffar",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName: "Anus",
//     lastName: "Malik",
// }


// let value = person.fullName.bind(member);

// console.log(value());



// ---------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------
// =====================================================================================================
