// -------------------------------------------------------------

// Day & Time

// new Date()
// .getDay()
// .getMonth()
// .getDate()
// .getFullYear()
// .getSeconds()
// .getMilliseconds()
// .getTime()

// -------------------------------------------------------------

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


// -------------------------------------------------------------


// function calculateAge(dateOfBirth) {
//     var myBirthDate = new Date(dateOfBirth).getTime();
//     var rightNow = new Date().getTime()

//     var remainingMilliseconds = rightNow - myBirthDate
//     console.log(Math.floor(remainingMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12));
// }

// calculateAge('November 27 , 2003')
// calculateAge('October 22 , 1920')


// -----------------------------------------------------------------------------------

// AGE 

var para = document.getElementById(`para`)

var age = prompt(`Enter your Brith Year`)

function calculateAge(dateOfBirth) {

    console.log(`Abdul Ghaffar`);

    var myBirthDate = new Date(dateOfBirth).getTime();
    var rightNow = new Date().getTime();

    var remainingMilliseconds = rightNow - myBirthDate;
    
    var age = (Math.floor(remainingMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12));

    para.innerHTML = (`Your age is ${age}year`);
    
    
}

calculateAge(age);
// calculateAge('October 22 , 1920')



// -----------------------------------------------------------------------------------