// ----------------------------------------------------

// var num = 20;

// console.log(num + " X 1 = " + num * 1)
// console.log(num + " X 2 = " + num * 2)
// console.log(num + " X 3 = " + num * 3)
// console.log(num + " X 4 = " + num * 4)
// console.log(num + " X 5 = " + num * 5)
// console.log(num + " X 6 = " + num * 6)
// console.log(num + " X 7 = " + num * 7)
// console.log(num + " X 8 = " + num * 8)
// console.log(num + " X 9 = " + num * 9)
// console.log(num + " X 10 = " + num * 10)

// ----------------------------------------------------

// Types of Loops

// for loop
// while loop
// do-while loop

// ----------------------------------------------------

// var num = 2;

// for (var i = 1; i <= 10; i++){
//     console.log(num + " X " + i + " = " + num * i)
// }

// ----------------------------------------------------

// variable ka name (i) rakhna Good Practice hai

// ----------------------------------------------------

// var input = document.querySelector("#number")
// var head = document.querySelector("#head")

// function button(){

//     console.log(typeof input.value);
//     div.innerHTML = "";

//   for (var i = 1; i <= 10; i++){
//     console.log(input.value + " X " + i + " = " + input.value * i);
//     head.innerHTML = input.value + " X " + i + " = " + input.value * i;
// }
// }


// ----------------------------------------------------


// // Backtick String , Template Literals

// // Your name is (username) with email (Email) and your age is (Age) 

// var username = "Abdul Ghaffar";
// var email = "Abdulghaffar15a@gmail.com";
// var age = 21;

// // Concadination
// console.log("Your name is " + username + " with email " + email + " and your age is " + age);

// // Backtick String
// console.log(`Your name is ${username} with email ${email} and your age is ${age}`)


// ----------------------------------------------------

// Create Table without loop in console

// var num = 20;

// console.log(`${num} X 1 = ${num * 1}`)
// console.log(`${num} X 2 = ${num * 2}`)
// console.log(`${num} X 3 = ${num * 3}`)
// console.log(`${num} X 4 = ${num * 4}`)
// console.log(`${num} X 5 = ${num * 5}`)
// console.log(`${num} X 6 = ${num * 6}`)
// console.log(`${num} X 7 = ${num * 7}`)
// console.log(`${num} X 8 = ${num * 8}`)
// console.log(`${num} X 9 = ${num * 9}`)
// console.log(`${num} X 10 = ${num * 10}`)

// ----------------------------------------------------

// Create Table with loop in console (+prompt)

// var num = +prompt("Enter Your Number")

// // (initialization , condition , increment)
// for (var i = 1; i <= 10; i++){
//     console.log(`${num} X ${i} = ${num * i}`)
// }

// ----------------------------------------------------

// Nested Loop

// for (var i = 1; i <= 10; i++){
//     console.log(`------ Outer Loop ${i} -------`)

//     for(var j = 1; j <= 5; j++){
//         console.log(`Inner Loop ${j}`)

//     }
// }

// console.log(`Console After loop`)

// ----------------------------------------------------

// // Nested Table Loop

// for (var i = 1; i <= 10; i++){
//     console.log(`------ Outer Loop ${i} -------`)

//     for(var j = 1; j <= 5; j++){
//         console.log(`Inner Loop ${i} X ${j} = ${i * j}`)

//     }
// }


// ----------------------------------------------------

// Infinity Loop

// for (var i = 1; i <= 1; i--){

//     console.log(`Outer Loop ${i}`)

// }


// ----------------------------------------------------

// var div = document.querySelector("#container");

// var fruits = ['watermelon', 'banana', 'apple', 'grapes', 'orange', 'mango', 'strawberry', 'pineapple', 'kiwi', 'cherry']

// for(var i = 1; i < fruits.length; i++){

//     console.log(`${fruits[i]} index ${i}`)
//     div.innerHTML += `<p>${fruits[i]}</p>`;

// }

// ----------------------------------------------------

// var ol = document.querySelector("#ordered_list");

// var Names = [ "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ivy", "Jack",
//     "Kathy", "Liam", "Mia", "Noah", "Olivia", "Paul", "Quincy", "Rachel", "Sam", "Tina",
//     "Ursula", "Victor", "Wendy", "Xander", "Yara", "Zach", "Amelia", "Benjamin", "Clara", "Daniel", 
//     "Ella"]

// for(var i = 1; i < Names.length; i++){

//     console.log(`${Names[i]} index ${i}`)
//     ol.innerHTML += `<li>${Names[i]}</li>`;

// }

// ----------------------------------------------------


