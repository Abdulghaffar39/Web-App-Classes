// querySelector: // (Ye method kisi specific HTML element ko select karne ke liye istemal hota hai.)
// .innerHTML     // (Ye property kisi HTML element ke content ko get ya set karne ke liye istemal hoti hai)


// var head = document.querySelector("#head")
// console.log(head.innerHTML)
// head.innerHTML = "Abdul Ghaffar"


// // -------------------------------------------------------------

// var p = document.querySelector("#para");
// p.innerHTML = "ABdul"


// -------------------------------------------------------------

// var h1 = document.querySelector("#head")

// function greetuser() {

// if (h1.innerHTML === "Hello DOM") {

//   h1.innerHTML = "Chnage thorugh js";
//   console.log (h1.innerHTML)

// } else {

//   h1.innerHTML = "Hello World";
//   console.log(h1.innerHTML)

// }

// }


// -------------------------------------------------------------



// var head = document.querySelector("#head");
// console.log(head.innerHTML = "Content Replace kia ha mena console me")

// head.innerHTML = "Hello INNER HTML"
// head.style.backgroundColor = "red"
// head.style.color = "white"



// -------------------------------------------------------------


// var email = document.querySelector("#email")
// var password = document.querySelector("#password")

// function greetuser(){

//   console.log(email.value)
//   console.log(password.value)

// }


// -------------------------------------------------------------


// var username = document.querySelector("#username")
// var head = document.querySelector("#head")


// function greetuser(){

//   if (head.innerHTML = username.value) {

//     head.innerHTML =   "Hello " + username.value

//   }else {

//     head.innerHTML = "Please Put Your Name"

//   }

// }


// function hide(){

//   head.innerHTML = "";

// }

// // -------------------------------------------------------------

// var head = document.querySelector(`#head`)


// function button(){
//     if (head.innerHTML === `Hello world`){

//       head.innerHTML = `Change through Javascript`;
//       console.log(head.innerHTML);

//     } else {

//       head.innerHTML = `Hello world`;
      
//     }
// }

// // --------------------------------------------------

var input = document.querySelector(`#input`);
var ol = document.querySelector(`#ordered_list`);

function Add_task(){
  console.log(input.value);
  ol.innerHTML += `<li>${input.value}</li>`
  input.value = ``
}

function Clear_task() {
  ol.innerHTML = ``;  
}

// // --------------------------------------------------


