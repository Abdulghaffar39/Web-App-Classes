// // for loops
// let cleanestCities = ['islamabad', 'lahore', 'faislabad', 'rawalpindi', 'multan'];

// function check() {

//     let cityToCheck = document.getElementById('cityToCheck').value;
//     let para = document.getElementById('para');

//--------------------------------- Long Way ----------------------------------------
    // ye Bhot lamba kam hai or is me time bhi bhot lage ga
    // if (cityToCheck === cleanestCities[0]) {

    //     alert("It's one of the cleanest cities");
    //     para.innerHTML = cityToCheck
    // }
    // else if (cityToCheck === cleanestCities[1]) {

    //     alert("It's one of the cleanest cities");
    //     para.innerHTML = cityToCheck
    // }
    // else if (cityToCheck === cleanestCities[2]) {

    //     alert("It's one of the cleanest cities");
    //     para.innerHTML = cityToCheck
    // }
    // else if (cityToCheck === cleanestCities[3]) {

    //     alert("It's one of the cleanest cities");
    //     para.innerHTML = cityToCheck
    // }
    // else if (cityToCheck === cleanestCities[4]) {

    //     alert("It's one of the cleanest cities");
    //     para.innerHTML = cityToCheck
    // }
    // else {

    //     alert("It's not on the list");
    //     para.innerHTML = `Your City is not a Cleanest City ${cityToCheck}`;
    // }


// ---------------------------------- Short Way --------------------------------------
    // Loop sara karm asan kardeta hai km time me


    // for (let i = 0; i <= 4; i++) {

    //     if (cityToCheck === cleanestCities[i]) {

    //         alert(`It's one of the cleanest cities ${cityToCheck}`)
    //         para.innerHTML = cityToCheck
    //         break;
    //     }

    // }



// --------------------------------- for loops Flags ---------------------------------------

//     // var matchFound = "no";
//     var matchFound = false;

//     for (let i = 0; i <= 4; i++) {

//         if (cityToCheck === cleanestCities[i]) {

//             alert(`It's one of the cleanest cities ${cityToCheck}`);
//             // matchFound = "yes";
//             matchFound = true;
//             para.innerHTML = cityToCheck
//             break;
//         }

//     }

//     // if (matchFound === "no") {
//     if (matchFound === false) {

//         alert("Its not of the list!")
//     }

// }


// --------------------------------- for loops Booleans ---------------------------------------


//     var matchFound = false;

//     for (let i = 0; i <= 4; i++) {

//         if (cityToCheck === cleanestCities[i]) {

//             alert(`It's one of the cleanest cities ${cityToCheck}`);
//             matchFound = true;
//             para.innerHTML = cityToCheck
//             break;
//         }

//     }

//     if (matchFound === false) {

//         alert("Its not of the list!")
//     }

// }


// ------------------------------- for loops array length ---------------------------------

// var numElements = cleanestCities.length

// var matchFound = false;

// for (let i = 0; i <= numElements; i++) {

//     console.log(numElements);
    
//     if (cityToCheck === cleanestCities[i]) {

//         alert(`It's one of the cleanest cities ${cityToCheck}`);
//         matchFound = true;
//         para.innerHTML = cityToCheck
//         break;
//     }

// }

// if (matchFound === false) {

//     alert("Its not of the list!")
// }

    
//-------------------------- Loop loopus interruptus ----------------------------
    
    // for (let i = 0; i < 10; i++) {
//   console.log("Step:", i);

//   if (i === 3) {
    //     console.log("Loopus interruptus at i =", i);
    //     break; // yahan loop ko zabardasti roka ja raha hai
//   }
// }

// console.log("Loop khatam ho gayi!");

// Result: loop bas 0, 1, 2, 3 tak chalta hai aur uske baad ruk jaata hai — yehi “loopus interruptus” hai.

// }