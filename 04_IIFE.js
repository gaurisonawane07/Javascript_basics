//Immediately invoked function expression(IIFE)
//Used to remove pollution of global scope
(function js(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();//last semicolon is necessary

((name)=> {
    console.log(`DB CONNECTED 2 ${name}`);
})('Gauri');



