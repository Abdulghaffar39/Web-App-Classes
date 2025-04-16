// Array  (ek variable ke undar multiple value store karta hai)

// ----------------------------------------------------------

// Two Concepts
// 1) Length  start(1 , 2 , 3)
// 2) Index   start(0 , 1 , 2)

// EX
// var items = ["Bag" , "Door" , "Shoose" , "Fan" , "Light"]
// console.log(items)
// console.log(items[3])

// ----------------------------------------------------------

// Array Methods

// push
// pop
// unshift
// shift
// slice
// split
// join
// concat
// sort
// reverse
// indexof

// ----------------------------------------------------------

// Push (Array ke End me New value store karta ha)
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
// student.push()
// student.push("Aseel")
// console.log(student)



// // Unshift  (Array ke Start me New value store karta ha)
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
// student.unshift()
// student.unshift("Hassan")
// console.log(student)


// // Pop (Array ka End wale method ko delete karta ha)
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
// student.pop()
// console.log(student)


// // Shift  (Array ka Start wale method ko delete karta ha)
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
// student.shift()
// console.log(student)

// // ----------------------------------------------------------

// // Splice (Array me agar center me koi cheez [add/delete] karte ha. lakin phele isaa {starting index} dena parta ha)

// // Delete ki misaal
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas" , "Farhan" , "Owais"]
// student.splice(4 , 2)
// console.log(student)

// var student = ["AbdulGhaffar", "Azmat", "Hammad", "Gayas", "Farhan", "Owais"];
// student.splice(3 , 1)
// console.log(student)

// // Add ki misaal
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas" , "Farhan" , "Owais"]
// student.splice(4 , 0 , "Aseel" , "Hassan")
// console.log(student)

// var student = ["AbdulGhaffar", "Azmat", "Hammad", "Gayas", "Farhan", "Owais"];
// student.splice(5 , 0 , "Aseel" , "Hassan")
// console.log(student)

// ----------------------------------------------------------

// Change background Color 

// var body = document.querySelector("body")

// function changColor(color) {

//   body.style.backgroundColor = color
  
// }

// ----------------------------------------------------------


// // Join (Method of String) (Ek String ko Array me convert karna ka liya Split method ka istamal kia jata ha)


// var username = "Meher Abdul Ghaffar"
// console.log(username.split("")) 
// console.log(username.split(" ")) 
// console.log(username.split("  ")) 

// ----------------------------------------------------------


// // Join (Method of String) (Ek Array ko String me convert karna ka liya join method ka istamal kia jata ha)

// var FullName =["Meher" , "Abdul" , "Ghaffar"];
// // console.log(FullName.join("abdul"))
// // console.log(FullName.join(" 123 "))
// // console.log(FullName.join(""))
// console.log(FullName.join(" "))

// ----------------------------------------------------------


// Nested Array

// var arr = [[1 , 2 , 3 , 4 , [5 , 6 , 7 ]]]
// console.log(arr[0][4])

// ----------------------------------------------------------

// Concat (do(2) array ko ek sath milata ha is 2 se ziyada ko nhi milata ha)

// // var num1 = [1, 2, 3, 4]
// // var num2 = [5, 6, 7, 8]

// var fname = ["Abdul"]
// var lname = ["Ghaffar"]

// // console.log(num1.concat(num2))
// console.log(fname.concat(lname));

// ----------------------------------------------------------

// Sort (Ye number/string ko tarteeb ke sath likhta ha)

// var num1 = [8, 2, 6, 4, 122, 6, 3, 8]   // (Ye number ke suru wali value ko dekhta ha)
// var num1 = [8, 2, 6, 4, 1, 6, 3, 8]

// console.log(num1.sort())

// ----------------------------------------------------------

// IndexOf (Ye value ko find karta ha agar wo value nhi hogi to (-1) show kare ga)

// var num1 = [8, 2, 6, 4, 1, 6, 3, 8]

// console.log(num1.indexOf(6))

// ----------------------------------------------------------

// IndexOf (Ye value ko Reverse karta hai)

// var num1 = [8, 7, 6, 5, 4, 3, 2, 1]

// console.log(num1.reverse());

// ----------------------------------------------------------


