function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("I");
}
//sayMyName()

// function addTwoNums(num1,num2) {
//     console.log(num1 + num2);
// }
// const result = addTwoNums(3,4)
// console.log(result);

function loginUserMessage( username = "SAM") {
    if (username === undefined) {
      // console.log("Please enter username"); 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())//when we not pass arguments then undefined returns

function calculateCartPrice(...num1) {
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000,400,500));


//how to pass object in function
const user = {
    username : "Gauri",
    Price : 350
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
}
handleObject(user)