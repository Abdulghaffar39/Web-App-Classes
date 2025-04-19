// ------------------------------------------------

// Javascript is a Prototype language

// Question : prototype kasi language ha
// Answer   : Is ka matlab ye ha ke [Dot Dot(..)] se Acsses kar sakte ha

// ------------------------------------------------

// Number Methods

// round      (Kisi bhi Number ko (round) kardeta ha [ (10.4) >>> (change in) >>> (10) ||||&&|||| (10.5) >>> (change in) >>> (11)] )
// floor      (Ye point ke bad wali value ko minus(-) kar ke normal number bnata ha [10.9 >>> (change in) >>> (10) ] )
// ceil       (Ye point ke bad wali value ko ziyada kar ke normal number bata ha [10.2 >>> (change in) >>> (11) ] )
// random     (Ye apni marzi se koi bhi number(random num) dedeta hai)
// parseInt 
// parseFloat 

// ------------------------------------------------

// Round

// let numround = 10.44
// console.log(Math.round(numround));


// ------------------------------------------------

// floor

// let numfloor = 10.9;
// console.log(Math.floor(numfloor));


// ------------------------------------------------

// Ceil

// let numCeil = 10.2;
// console.log(Math.ceil(numCeil));


// ------------------------------------------------

// Random

// let numrandom = Math.random();
// console.log(numrandom);



// console.log(Math.random() * 10);



// console.log(Math.ceil(Math.random() * 10));


// ------------------------------------------------
// Create Toss App


var masjadImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7_4TnSKZkWs5pVRrkfsPJg0eA7mC71OL9AOYCWE5z_V0Cp7tVHjn8xfTonsOL_rhMzE&usqp=CAU";

var chandImg =
  "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg";



var para = document.querySelector(`#para`)
var img = document.querySelector(`#img`)
img.src = chandImg;


function toss(coin) {

  let randomNum =(Math.floor(Math.random() * 2)); 
  console.log(randomNum);
  
  if (coin === `masjad` && randomNum === 0 || coin === `chand` && randomNum === 1){
    para.innerHTML = `You won the Toss`

  }else{
    para.innerHTML = `You loss the Toss`

  }


  if  (randomNum === 0){
    img.src = masjadImg

  }else{
    img.src = chandImg;

  }
}


// ------------------------------------------------





