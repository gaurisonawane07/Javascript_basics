//Dates

let myDate = new Date()
// console.log(myDate,toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let mycreatedDate = new Date("19-07-2024");
// console.log(mycreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
`The day is ${newDate.getDay() } and the time is ${newDate.getDate()}`
newDate.toLocaleString('default',{
    weekday:"long"
})