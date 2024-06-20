let a = 300

if(true){
    let a = 10
    const b = 20
    //console.log("INNER:",a);
}


// console.log(a);
//console.log(b);
//console.log(c); //Avoid using var


function one(){
    const username = "gauri"

    function two(){
        const website = "youtube"
        //console.log(username);
        
    }
    // console.log(website);
    two()
}
//one()

if(true){
    const username = "GAURI"
    if(username === "GAURI"){
        const website = " youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//************** interesting*****************//
function addone(num){
    return num+1
}
console.log(addone(5))


const addtwo  = function(num){
    return num+2
}
addtwo(5)