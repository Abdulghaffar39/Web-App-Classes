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

