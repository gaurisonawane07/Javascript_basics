const accountId = 144553
let accountEmail = "gaurigoogle@34.com"
var accountPassword ="12435"//dont use var keyword
accountCity = "Jaipur"//wrong method
let accountState//when we dont know value

//accountId = 2 not allowed

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])