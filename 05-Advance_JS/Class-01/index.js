// Advance Javascript

// -------------------------------------------------------------------------------------------


// 01- Sets

// Ek JavaScript Set munfarid(unique) values ka majmua hota hai.    
// Har value sirf aik dafa Set mein mojood ho sakti hai.
// Ye values kisi bhi qisam ki ho sakti hain — yani primitive(String/Number/Boolean) ya object.
// primitive :yani aisi value jo object nahi hoti aur directly store hoti hai.


// const letters = new Set(["a","b","c","d"]);
// console.log(letters.size);


// let letters = new Set();
// console.log(letters.size);


// let letters = new Set('e');
// letters.add("a")
// letters.add("b");
// letters.add("c");
// letters.add("d");
// console.log(letters.size);


// const letters = new Set();

// const a = "value 1";
// const b = "value 1";
// const c = "value 1";

// letters.add(a);
// letters.add(b);
// letters.add(c);

// console.log("The set has " + letters.size + " values.");
// Answer 1 aye ga keyo ke a/b/c variable me value aik jesi hai



// const letters = new Set();

// // Create Variables
// const a = "value 1";
// const b = "value 2";
// const c = "value 3";

// // Add Values as Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);

// console.log("The set has " + letters.size + " values.");
// // Answer 3 aye ga keyo ke a/b/c variable me value aik jesi nhi hai


// -------------------------------------------------------------------------------------------

// forEach
// forEach() ka kaam hai array ya set ke har item par action perform karna, bina manually loop counters ko manage kiye.


// let sum = 0;
// let numbers = [1, 2, 6, 46, 4];

// numbers.forEach(value)
// function value(item) {
//     sum += item
// }

// console.log(sum);


// -------------------------------------- Without forEach --------------------------------------
// let sum = 0;
// let numbers = [1, 2, 6, 46, 4];

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// console.log(sum);


// -------------------------------------------------------------------------------------------

// // filters: JavaScript me ek method hai jo ek nayi array banata hai jisme sirf wo elements hote hain jo di gayi condition ko satisfy karte hain, aur original array ko modify nahi karta.

// const ages = [12, 35, 34, 94, 43, 13, 8, 34]
// const result = ages.filter(checkAdult)

// function checkAdult(age){

//     // return age <= 18;
//     return age >= 18;

// }
// console.log(result);

// -------------------------------------- Without filter --------------------------------------
// const ages = [12, 35, 34, 94, 43, 13, 8, 34]
// let array = []
// for (let i = 0; i < ages.length; i++) {
    
//     if(ages[i] >= 18){

//         array.push(ages[i])
//     }
    
// }

// console.log(array);


// -------------------------------------------------------------------------------------------

// Key
// Map ek aisa object hai jo keys aur unki values ko store karta hai aur yaad rakhta hai ke keys ko kis order mein daala gaya tha.

// const numbers = [4, 8, 16, 32 , 64, 128, 256, 512];

// const newArr = numbers.map(Math.sqrt);
// const sortArray  = numbers.map((e) =>{

//     return e;
//     // return e > 18;
//     // return e === 200;
// })

// console.log(newArr);
// console.log(sortArray );


// -------------------------------------------------------------------------------------------

// Spread
// array ya object ke elements ko spread (phaila) karne ke liye use hota hai. Ye existing array ya object ko copy karne, merge karne, ya nayi values add karne ka kaam karta hai.


const alphabates = ["a", "b", "c", "d"];

const resultA = [alphabates];
const resultB = [...alphabates];

console.log(resultA);
console.log(resultB);


// -------------------------------------------------------------------------------------------