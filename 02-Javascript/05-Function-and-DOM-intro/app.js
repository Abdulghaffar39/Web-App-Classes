// Functions

// function myfunc() {

//     console.log("Hello world")
//     console.log("Hello world")
//     console.log("Hello world")
//     console.log("Hello world")
//     console.log("Hello world")

// }

// myfunc()
// myfunc()




// --------------------------------------------------




// function greetuser(){
//     console.log("Malik tum kamiyab ho")

// }

// greetuser()
// greetuser()
// greetuser()
// greetuser()





// --------------------------------------------------


// parameter (parameters wo variables hote hain jo function ke andar use kiye jaate hain)
// argument ( Jab aap function ko call karte hain, to aap arguments pass karte hain, jo parameters ki values set karte hain.)

// undefined (Variable declared hai lekin usme koi value assign nahi hui.)
// null (Jab aap kisi variable ya object ko khaali (empty) set karna chahte hain)

// var username = null;
// console.log(username);


// --------------------------------------------------



// username = "Abdul Ghaffar";


// function greetuser (username){
//     console.log("Hello " + username)

// }

// greetuser(username);
// greetuser("usman")
// greetuser("Akram")




// --------------------------------------------------



// function sum (num1 , num2, num3){
//     console.log(num1 + num2) 
//     console.log(num3)

// }

// sum(20 , 20)
// sum(20 , 20)
// sum(20 , 20)




// --------------------------------------------------




// function checkcity(cityname){

//     if(cityname === "Karachi"){
//         console.log("You live in cleanist city")

//     }else {
//         console.log("jindagi barbad")
//     }
// }

// var userinput = prompt("Enter your city");
// checkcity(userinput)



// --------------------------------------------------




// Return Keyword

// function hello(){
//     console.log("HEllO WORLD");
//     return "Wapsi Krdia"

// }

// var user = hello()
// console.log(user)




// --------------------------------------------------




// function fullname (fname , lname){
//     var a = "Hello " + fname + "-" + lname ;
//     return "Hello world";
// }

// var greetingusername = fullname("Abdul" , "Ghaffar")
// console.log(greetingusername)



// // --------------------------------------------------



// function sum (num1 , num2){
//     return num1 + num2

// }

// var total = sum(20 , 80)
// console.log (total)



// --------------------------------------------------




// function greet(username , age){
//     console.log (username + " " +  age)
//     return "Name " + username + " and age is " + age
// }

// var userfullname = prompt("Enter your name")
// var userage = prompt("Enter your age")

// var detail = greet(userfullname , userage)
// console.log(detail)




// --------------------------------------------------



function greetuser(username){
    console.log("Hello " + username)
}

function secondfunc(){
    console.log("HEllO WORLD")
    greetuser("usman")
}

secondfunc()