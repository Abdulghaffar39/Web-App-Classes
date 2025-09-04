// Nested Loop

// var fname = ['anas' , 'akbar' , 'aslam' , 'amjad'];
// var lname = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullname = [];

// for (let i = 0; i < fname.length; i++){


//     for(let j = 0; i < lname.length; i++){

//         console.log(fname[i] + lname[i]);

//         fullname.push(fname[i] + lname[i])

//     }
// }




// Changing case


// var check_Name = prompt('Enter your name');

// check_Name = check_Name.toLowerCase;

// var identity = ['Anus' , 'Akbar' , 'Aslam' , 'Amjad'];

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {

//     if (str.slice(i, i + 2) === " ") {

//         alert("No double spaces!");

//         break;


//     }

// }

// for (var i = 0; i < text.length; i++) {

//     if (text.charAt(i) === "!") {

//         alert("Exclamation point found!");


//     }

// }


// let str = "Hello";
// console.log(str.charAt(0)); // "H"
// console.log(str.charAt(1)); // "e"
// console.log(str.charAt(4)); // "o"



// let str = "Hello World";
// let result = str.replace("World", "JavaScript");
// console.log(result); // "Hello JavaScript"


// Converting strings to integers and decimals
// ----------------------------------------------

// Number string me araha ha

// var age = prompt('Enter your age')
// console.log('Current Age ' + age);

// Problem 
// Number ki value prompt se string me arahi ha

// ----------------------------------------------

// Converting String to Number (4 Types)

// parseInt
// Number
// Plus sign(+)
// parseFloat


// // parseInt
// var age = parseInt(prompt('Enter Your age!!!'));
// console.log(`(parseInt) Your age is ${age} and plus 2 in your age ${age +2}`);


// // Number
// var age = Number(prompt('Enter your age!!!'));
// console.log(`(number) Your age is ${age} and plus 2 in your age ${age +2}`);


// // Plus sign(+)
// var age = +prompt('Enter your age!!!');
// console.log(`(Plus sign(+)) Your age is ${age} and plus 2 in your age ${age +2}`);


// // parseFloat
// var fraction = parseFloat('1.9000')
// console.log(fraction);

// ----------------------------------------------

// String number & String number (multipy, divide and minus)

// Multipy
// Divide
// Minus
// But 'plus' ko number me nhi change kare ga 'Concadinate' karde ga


// console.log('500' * '10');
// console.log('500' / '10');
// console.log('500' - '10');
// console.log('500' + '10');


// Result
// string me (multiply , divide & minus) dalne se wo number ki tarha kam kare ga
// lakin (plus) value dalne se wo Concadinate karde ga

// ----------------------------------------------

// String number & Number

// Multipy
// Divide
// Minus
// But 'plus' ko string or number wali value 'Concadinate' karde ga


// console.log('500' * 10);
// console.log('500' / 10);
// console.log('500' - 10);
// console.log('500' + 10);


// Result
// ek side string or dousri side number dalne se wo number ki tarha kam kare ga(* , / and -) me
// lakin (plus) value dalne se wo Concadinate karde ga

// ----------------------------------------------

// String Number & string value


// console.log('500 ' - 'Abdul Ghaffar');
// console.log('500 ' * 'Abdul Ghaffar');
// console.log('500 ' / 'Abdul Ghaffar');
// console.log('500 ' + 'Abdul Ghaffar');


// Result
// String Number & String Value ko (* , / and -) ki surat me NaN show kare ga
// lakin plus ki surat me 'Concadinate' kare ga

// ----------------------------------------------

// Convert string to number and Concadinate

// // parseInt Concadinate 
// var age = prompt('Enter Your age!!!');
// console.log(parseInt(age + 1));

// // number Concadinate
// var age = prompt('Enter Your age!!!');
// console.log(Number(age + 1));

// // parseFloat Concadinate
// var age = prompt('Enter Your age!!!');
// console.log(parseFloat(age + 1));

// Result
// Ye string ko number me convert karta ha or Concadinate bhi kardeta ha 

// ----------------------------------------------

// // Converting Number to String 

// var number = 2000;
// console.log(number.toString() + 500);

// Result
// ye ( ".tostring()" ) number ko string me convert karta hai

// ----------------------------------------------


// var rightNow = new Date();
// var day = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];

// console.log(rightNow.toString());
// console.log(day[rightNow.getDay()]);      // Day
// console.log(rightNow.getDay());           // Day Count
// console.log(rightNow.getMonth());         // Month
// console.log(rightNow.getDate());          // Date
// console.log(rightNow.toDateString());     // Day / Date / Month / Year
// console.log(rightNow.getFullYear());      // Full Year
// console.log(rightNow.getHours());         // Hours
// console.log(rightNow.getMinutes());       // Minutes
// console.log(rightNow.getSeconds());       // Seconds
// console.log(rightNow.getMilliseconds());  // Milli Seconds
// console.log(rightNow.getTime());          // Time
// console.log(rightNow.getTime() / 1000 / 60 / 60 / 24);