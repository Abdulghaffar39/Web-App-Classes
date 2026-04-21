var userName = "Abdul Ghaffar";
var age = 30;
console.log(userName, age);
// TypeScript Data types
// Primitive Types
// string
// number
// boolean
// bigint
// symbol
// null
// undefined
// 🔹 Special Types
// any
// unknown
// void
// never
// 🔹 Object Related
// object
// array
// tuple
// enum
// 🔹 Advanced / Utility Types
// union
// intersection
// literal
// type (type alias)
// interface
// function
// readonly
// keyof
// typeof
// instanceof
// partial
// required
// record
// pick
// omit
// //--------------------------------------------- 🔹 Special Types --------------------------------------------------
// // any (isme koi si bhi type add kar sakte hai)
// var glass: any = 10
// console.log(glass);
// // unknown (ye kam [any] ki tarha karta hai lakin isme type check karte hai konsi hai)
// var server: unknown = "hello world"
// // void (ayesa function jo kuch bhi return nhi kar raha)
// function message(): void {
//     console.log("This fucntion return nothing");
// }
// // never (ye kabhi bhi kuch bhi return nhi kare ga)
// function Errors(): never {
//     throw new Error("Some went wrong");
// }
// //--------------------------------------------- 🔹 Advanced Types --------------------------------------------------
// // union (ye multiple data type ko ek variable me la sakta hai)
// let value: string | number;
// value = "Hello";
// value = 100
// // type (type alias) [jab ham khud ke custom data type define karte hai]
// type ID = string | number;
// let userid: ID = "user123"
// // Enum (jitne options hai un mese hi value mile gi)
// enum Role {
//     admin,
//     user,
//     guest,
// }
// let userRole: Role = Role.Admin;
// // literal (jo value dali hai bilkul wahi value honi chiye)
// let direction: "up" | "down";
// direction = "up"; // Allowed
// direction = "left"; // Error
// // function
// let add: (x: number, y: number) => number;
// add = (x, y) => x + y
