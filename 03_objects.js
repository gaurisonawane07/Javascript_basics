//singleton
//object consist of key value pairs

//object literals
//symbols are accessed by square brackets

//SYMBOL
const mySym = Symbol ("key1")
const JsUser = {
    name:"Gauri",
    [mySym]:"myKey1",
    age:18,
    location:"maharashtra",
    isLoggedIn: false,
    LastLoginDays: ["Monday,Saturday"]
}
//accessing 
// console.log(JsUser["location"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.location = "NASHIK";
console.log(JsUser);

//FUNCTION
JsUser.greeting = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());