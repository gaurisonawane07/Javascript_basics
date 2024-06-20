//array
const myArr = [0,10,2,34,5,56]
const myIdols = ["m.s.dhoni","APJ Abdul Kalam"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[2]);//accessing values by index
//Array Methods
// myArr.push(6)

// myArr.pop();

myArr.unshift(9)//unshift used for insert number at start
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(34));
const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//slice and splice
// console.log("A".myArr);
const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B",myArr);

const myn2 = myArr.splice(0,3);
console.log(myn2);
