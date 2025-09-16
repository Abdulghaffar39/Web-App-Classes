// const fs = require('fs')

// ------------------ Write file --------------------
// // Sync...
// fs.writeFileSync("./test.txt" , "Hello world")

// // Async...
// fs.writeFile("./test.txt" , "Hello world Async" , (err) => {});


// ------------------ Read file --------------------
// // Sync...
// const result = fs.readFileSync('./contact.txt' , 'utf-8')
// console.log(result);

// // Async...
// // const result = fs.readFile('./contact.txt' , 'utf-8');   // Error
// const result = fs.readFile('./contact.txt' , 'utf-8' , (err, result) => {

//     if(err){

//         console.log('Error' , err)
//     }
//     else{

//         console.log(result);
//     };
// })


// // append
// // fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt" , `${Date.now()} Hey there\n`)


// // Copy File
// fs.cpSync("./test.txt", "./test2.txt");

// // Delete File
// fs.unlinkSync("./test2.txt")

// // // Statistics
// console.log(fs.statSync("./test.txt"));

// Make Directory (Create Folder)
// fs.mkdirSync("my-doc");
// fs.mkdirSync("my-doc/a/b", {recursive: true});



// Architecture


// // Sync...Blocking....

// console.log('1');

// const fs = require('fs')
// const result = fs.readFileSync("contact.txt" , "utf-8")
// console.log(result);

// console.log('2');


// // Async...Non - Blocking Req

// console.log('1');

// const fs = require('fs')
// const result = fs.readFile("contact.txt" , "utf-8", (err, result) =>{
//     console.log(result);
// });

// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');


// ---------------------- OS (Opreating system) -----------------------
// hamare Opreating system ki information deta hai
// Default Thread Pool Size = 4
// Max? - 8core cpu - 8

const os = require('os')
console.log(os.cpus().length);



