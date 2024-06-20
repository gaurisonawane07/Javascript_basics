const user = {
    username : "GAURI",
    price : 999,

    welcomeMessage: function(){
        //console.log(`${this.username},Welcome to website`);
        //console.log(this);
    }


}
//user.welcomeMessage()
//console.log(this);

// function chai() {
//     console.log(this);
//}
//chai()

// const chai = function(){
//     let username = "gauri"
//     console.log(this.username);
// }

//************ARROW FUNCTION****************//

// const chai = () =>{
//     let username = "gauri"
//     console.log(this);
// }
// chai()

const addTwo = (num1,num2) => {
    return num1+num2

}
console.log(addTwo(3,4));
//*********************IMPLICIT RETURN*****************//

const addition = (nmb1,nmb2)=>num1+num2
console.log(addition(5,6));