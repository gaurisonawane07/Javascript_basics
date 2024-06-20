// primitive data types
// 7 types : string,number,boolean,null,undefined,symbol,bigint
// Javascript is a dynamically typed language 
// reference(Non primitive)
// Array,Objects,functions
const score = 100
const scoreValue = 100.3
const isloggedIn = false
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId);

const bigNumber = 7664657567765765673546756n
const countries = ["India","America","Russia","Italy"]
let myObj = {
    name:"Gauri",
    age : 13

}
const myFunction = function(){
    console.log("Hello World");
}
// function in javascript
//****************************************************************/
//Stack(primitive),heap memory(non-primitive)=>two types
let myRepoName = "GauriSonawane"
let anotherName = myRepoName
anotherName = "technology"
console.log(anotherName);
console.log(myRepoName);
let user = {
    email:"user@456.com",
    upi:"mbhuhf"
}
let user2 = user
user2.email = "gauri876@gmail.com"

console.log(user.email);
console.log(user2.email);


            