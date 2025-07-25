// ----------------------------------------------------------------

// Alert

// Correct Way
// alert('Abdul Ghaffar');
// window.alert('Some coders write window.alert');
// alert('Abdul Ghaffar 1 ' + ' Abdul Ghaffar 2');
// alert('Abdul Ghaffar 1 ' + '\n' + 'Abdul Ghaffar 2');
// alert(variable call)

// Incorrect Way
// alert('Abdul Ghaffar 1' , 'Abdul Ghaffar 2');
// alert('Abdul Ghaffar 1 ' + '</br>' + 'Abdul Ghaffar 2');
// alert
// alert''

// ----------------------------------------------------------------

// legal Way OR illegal Way

// // legal Ways 
// var name = 'ali';
// var firstName = 'ahemad';
// var _first_Name_ = 'anas';
// var $firstName = 'talha';
// var FirstName = 'huzaifa';
// var First_Name = 'shahid';
// var firstName123 = 'shahid';

// // illegal Ways 
// var 123name = 'ali';
// var @firstName = 'ahemad';
// var &firstName = 'anas';
// var firstName 'talha';
// var  = 'huzaifa';
// var 1 = 'hanzala';


// ----------------------------------------------------------------

// Variables for Strings


// var name = ('Abdul Ghaffar');
// console.log(name);

// var name = 'Abdul Ghaffar1';
// console.log(name);

// var name = 'Azmat';
// name = 'ahmad';
// console.log(name);

// var fname;
// var fname = 'Azmat ali';
// console.log(name);

// var name = 'Akram';
// var yourFirstName = 'Akram';
// var a = 'Akram';

// ----------------------------------------------------------------

// Variables for Strings


// var weight = 80;
// console.log(weight);

// var weight = 150;
// console.log(weight + 50);

// var age = 23;
// var new_age = age + 3;
// console.log(new_age);

// var old_age = 50;
// var gain_age = 10;
// var age = old_age + gain_age;
// console.log(age);


// var marks = 80;
// marks = marks + 10;
// console.log(marks);


// ----------------------------------------------------------------

// Math expressions: Familiar Operators

// var num = 2 + 2;
// var num = 10 - 2;
// var num = 10 / 2;
// var num = 10 * 2;
// var num = 100 % 7;
// console.log(num);

// var num = 10;
// var add = num + 23;
// console.log(add);

// ----------------------------------------------------------------

// Math expressions: Unfamiliar Operators

// Short way & Behind way 
// num++
// num = num + 1;

// Increment
// num++

// Decrement 
// num--

// var num = 1;
// var newNum = num++;
// console.log(newNum);

// var num = 1;
// var newNum = ++num;
// console.log(newNum);

// var num = 1;
// var newNum = num--;
// console.log(newNum);

// var num = 1;
// var newNum = --num;
// console.log(newNum);


// ----------------------------------------------------------------

// Math expressions: Eliminating Ambiguity

// var num = 1 + 4 * 5;
// console.log(num);

// var total_Cost = 1 + (3 * 5);
// console.log(total_Cost);

// var total_Cost = (3 + 5) * 2;
// console.log(total_Cost);

// var remainig_value = (3 + 5) * 2 + 3;
// console.log(remainig_value);

// var math = (3 + 5) * (2 + 3);
// console.log(math);

// var cost = ((2 * 4) * 4) + 2;
// console.log(cost);

// ----------------------------------------------------------------

// Concatenating text strings

// var username = 'Abdul Ghaffar';
// console.log('Thanks, ' + username + '!');

// var username = 'Ali';
// var message = 'Thanks, ';
// var banger = '!';
// console.log(message + username + banger);

// console.log('Thank, ' + 'Azmat ' + 'for Your Visit ' + '!');

// var username = 'Ali';
// var message = 'Thanks, ';
// var banger = '!';
// var visit = (message + username + banger);
// console.log(visit)

// var number = '20' + '20';
// console.log(number);

// ----------------------------------------------------------------

// Prompts

// var a = prompt('Enter anything')
// var a = window.prompt('Enter window prompt')

// var value = prompt('Enter your value')
// console.log(value);

// var value = 'what is your ';
// var genter = 'Genter'
// var add_gender = prompt(value + genter)
// console.log(add_gender);

// ----------------------------------------------------------------

// if statements

// Equal (===) Value
// Check your Data type then give the awnser

// Equal (==) Value
// Don't check your Data type then give the awnser

// var name = prompt('Enter Name');
// if(name === 'Abdul Ghaffar'){

//     alert('Correct Awnser')
// }

// var name = 'Abdul Ghaffar';
// if(name === 'Abdul Ghaffar'){

//     alert('Correct Awnser')
// }

// ----------------------------------------------------------------

// Comparison Operators

// var name = 'anas';
// if( name !== 'ayan'){
//     alert('Correct')
// }

// var name = 'ayan';
// if( name === 'ayan'){
//     alert('correct')
// }

// var num1 = 10;
// var num2 = 102;
// if(num1 < num2){
//     alert('correct')
// }

// var num1 = 10;
// var num2 = 10;
// if(num1 <= num2){
//     alert('correct')
// }

// var num1 = 15;
// var num2 = 10;
// if(num1 => num2){
//     alert('correct')
// }

// ----------------------------------------------------------------

// if...else and else if statements

// Long Work
// var name = 'ali';
// if(name === 'ali'){

//     alert('correct');

// }
// if(name !== 'ali'){

//     alert('Wrong');

// }

// // Short Work
// var name = 'al';
// if(name === 'ali'){

//     alert('correct');

// }else{ 
//     alert('Wrong');
// }

// ----------------------------------------------------------------

// Testing sets of conditions

// var weight = 200;
// var time = 20;

// if(weight > 150 && time < 25){

//     alert('Correct');

// }else{
//     alert('Incorrect')
// }

// var weight = 200;
// var time = 20;
// var genter = 'male';

// if(weight > 250 || time < 15 || genter === 'male'){

//     alert('Correct');

// }else{
//     alert('Incorrect')
// }

// ----------------------------------------------------------------

// if statements nested

// if (c === d) {

//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         g = h;
//     }
//     else {
//         e = f;
//     }

// }
// else {

//     e = f;
    
// }

// ----------------------------------------------------------------

// Arrays

// var names = ['ayan' , 'anas' , 'akram' , 'amjad' , 'thseen', 'inayat']
// console.log('Welcome ' + names[5]);

// var mixedArray = [1, "Bob", "Now is", true];
// console.log(mixedArray[2] , typeof(mixedArray[2]));

// ----------------------------------------------------------------

// Arrays: Adding and removing element; 

// // push     (Array ke End me New value store karta ha)
// var names = []
// console.log(names.push('anas' , 'akram' , 'amja d'));

// // pop      (Array ka End wale method ko delete karta ha)
// var mixedArray = [1, "Bob", "Now is", true];
// console.log(mixedArray.pop());
// console.log(mixedArray);

// ----------------------------------------------------------------

// Arrays: Removing, inserting, and extracting elements

// // Unshift  (Array ke Start me New value store karta ha)
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
// student.unshift()
// student.unshift("Hassan")
// console.log(student)

// // Shift  (Array ka Start wale method ko delete karta ha)
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas"]
// student.shift()
// console.log(student)


// // Splice (Array me agar center me koi cheez [add/delete] karte ha. lakin phele isaa {starting index} dena parta ha)

// // Delete ki misaal
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas" , "Farhan" , "Owais"]
// student.splice(4 , 2)
// console.log(student)

// // Add ki misaal
// var student = ["AbdulGhaffar" , "Azmat" , "Hammad" , "Gayas" , "Farhan" , "Owais"]
// student.splice(4 , 0 , "Aseel" , "Hassan")
// console.log(student)
// ----------------------------------------------------------------




