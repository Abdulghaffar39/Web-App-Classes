
// -------------------------------------------------------

// variable bane ke 3 tarika 

// 01 var          (Ye variable [Assign , Re-Assign & Re-Declare] ho jata hai)
// 02 let          (Ye variable [Assign , Re-Assign] ho jata hai. lakin [Re-Declare] nhi hota)
// 03 const        (Ye variable [Assign] ho jata hai. lakin [Re-Declare , Re-Assign] nhi hota)


// -------------------------------------------------------

// 01 var

// var username = `Abdul Ghaffar`;  // Initialize , Declare , Assign 
// username = `Ghyas`;   // Re-Assign 
// var username = `Azmat`;   // Re-Declare

// console.log(username)

// -------------------------------------------------------

// 02 let

// let username = `Abdul Ghaffar`;  // Initialize , Declare , Assign 
// username = `Ghyas`;   // Re-Assign 
// var username = `Azmat`;   // Re-Declare (False X)

// console.log(username);


// -------------------------------------------------------

// 03 const

// const username = `Abdul Ghaffar`;  // Initialize , Declare , Assign 
// username = `Ghyas`;   // Re-Assign (False X)
// const username = `Azmat`;   // Re-Declare (False X)

// console.log(username);


// -------------------------------------------------------

// Method / Function

// Method: Jaha par [Dot(.)] ho wo method hota hai
// Function: Jaha par [Dot(.)] Nhi hoto wo Function hota hai

// -------------------------------------------------------

// String Methods

// toLowerCase (javascript ke zariya String ko [lower Case] me lane ke liya use hota ha)
// toUpperCase (javascript ke zariya String ko [Upper Case] me lane ke liya use hota ha)
// length      (Length > start > one(1). Ye String ke words ko Count karta ha or space ko bhi count karta ha)
// charAt      (Ye String ka index maloom karta hai. Num > value = (1) > (a))
// indexOf     (Ye String ka index maloom karta hai. Value > Num = (a) > (1))
// slice       (ye String ki shelow copy banata ha. is me (push,pop,shift & unshift) nhi chale ga)
// replace     (ye string ki value ko replace/update/change karta ha lakin sirf suru ki value ko)
// replaceall  (ye string ki value ko (replace/update/change) karta ha or sari values ko replace karta ha)
// split       (String > Convert > Array. string ko array me convert karta ha)
// join        (Array > Convert > String. array ko string me convert karta ha)

// -------------------------------------------------------

// toLowerCase(Small)

// var username = `Abdul Ghaffar`; 
// console.log(username.toLowerCase())

// string ne is string ko LowerCase me nhi kia bhalke is method [toLowerCase] ne naya method return kia Jo sare Case ko lower ne lakar de raha he

// -------------------------------------------------------

// toUpperCase(Capital)

// var username = `Abdul Ghaffar`;
// console.log(username.toUpperCase())

// -------------------------------------------------------

// Length

// var username = `Abdul Ghaffar`;
// console.log(username.length)

// -------------------------------------------------------

// CharAt[num > value(Charactor At)]

// var username = `Abdul Ghaffar`;
// console.log(username.charAt(12));

// (charAt.length - 1) Kisi bhi string ka last charactor chaiya to

// var username = `Abdul Ghaffar`;
// console.log(username.charAt.length - 13);

// -------------------------------------------------------

// IndexOf [ye first index ko show kare ga(value > num)] 

// var username = `Abdul Ghaffar`;
// console.log(username.indexOf(`a`));

// LastIndexOf [ye last index ko show kare ga(value > num)] 

// var username = `Abdul Ghaffar`;
// console.log(username.lastIndexOf(`a`));

// -------------------------------------------------------

// Slice

// var username = `Abdul Ghaffar`;
// console.log(username.slice(0 , 5));


// -------------------------------------------------------

// Replace (first replace)

// var username = `This is a Car. This is House. This is Mango. This is SMIT. This is a beautyfull House`;
// console.log(username.replace(`This` , `That`));

// // ReplaceaAll (all replace)

// var username = `This is a Car. This is House. This is Mango. This is SMIT. This is a beautyfull House`;
// console.log(username.replaceAll(`This`, `That`));


// -------------------------------------------------------

// Split & Join 

var statement = "Azam is a good cricketer. He is a fittest player after virat kohli in the world. Azam is looking like a wow. He passed all the fitness test. He followed diet strictly."

console.log(statement.split(` `).reverse().join(` `));
console.log(statement.split(``).reverse().join(``));

// -------------------------------------------------------

// City Form

const cities = [`karachi` , `sukkar` , `dado` , `larkana` , `mirpurkhas` , `hyderabad`]

const input = document.querySelector(`#input`)  
const p = document.querySelector(`#para`)  

function checkCity(){
    console.log(input.value);
    console.log(cities.includes(input.value.toLowerCase()));
    
    
    if (cities.includes(input.value.toLowerCase())) {
        p.innerHTML = (`You live in sefest city & its very beautyfull city`);
        
    }else {
        p.innerHTML = (`Jindagi barbad`)
    }

    
    input.value = ``
}

// -------------------------------------------------------
