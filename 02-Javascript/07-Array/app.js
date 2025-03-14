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
var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
student.push()
student.push("Aseel")
console.log(student)



// Unshift  (Array ke Start me New value store karta ha)
var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
student.unshift()
student.unshift("Hassan")
console.log(student)


// Pop (Array ka End wale method ko delete karta ha)
var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
student.pop()
console.log(student)


// Shift  (Array ka Start wale method ko delete karta ha)
var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
student.shift()
console.log(student)

// ----------------------------------------------------------


// Splice (Array me agar center me koi cheez [add/delete] karte ha. lakin phele isaa {starting index} dena parta ha)

// Delete ki misaal
var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas" , "Farhan" , "Owais"]
student.splice(4 , 2)
console.log(student)

var student = ["AbdulGhaffar", "Azmat", "Hammad", "Gayas", "Farhan", "Owais"];
student.splice(3 , 1)
console.log(student)

// Add ki misaal
var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas" , "Farhan" , "Owais"]
student.splice(4 , 0 , "Aseel" , "Hassan")
console.log(student)

var student = ["AbdulGhaffar", "Azmat", "Hammad", "Gayas", "Farhan", "Owais"];
student.splice(5 , 0 , "Aseel" , "Hassan")
console.log(student)
// ----------------------------------------------------------


