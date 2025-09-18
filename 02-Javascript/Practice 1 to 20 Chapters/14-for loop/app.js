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

            alert(`It's one of the cleanest cities ${cityToCheck}`)
            isfound = true
            para.innerHTML = cityToCheck
            break;
        

    

    if (isfound === false){
        
        alert("It's not on the list");
        return
    }



