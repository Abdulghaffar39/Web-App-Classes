var age = 21;

alert ("I am " + age + " year old")

// -----------------------------------------------------

// Step 1: Check karo ki localStorage mein visitCount hai ya nahi
var visitCount = localStorage.getItem('visitCount');

// Step 2: Agar visitCount nahi hai, to use 0 set karo
if (!visitCount) {
    visitCount = 0;
}

// Step 3: Visit count ko 1 se increase karo
visitCount = parseInt(visitCount) + 1;

// Step 4: Updated count ko localStorage mein save karo
localStorage.setItem('visitCount', visitCount);

// Step 5: Alert box mein visit count show karo
alert("You have visited this site " + visitCount + " times.");

// -----------------------------------------------------

var brith_year = ("1990")

document.write("My brith year is" + brith_year );

// -----------------------------------------------------

var visiter_name = prompt("Enter your Name")
var visiter_product = prompt("Cloth Type");
var visiter_quantity = prompt("Order")

var order_detail = ( visiter_name + " ordered " + visiter_quantity + "-" + visiter_product + "(s) NewClothing Store");

document.write(order_detail);


// -----------------------------------------------------

