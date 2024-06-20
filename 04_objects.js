const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Gauri"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"gauri",
            lastname:"Sonawane"
        }
    }
}
// console.log(regularUser.fullname.userfullname)
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = {5: "a",6: "b"}
//const obj4 = Object.assign({},obj1,obj2,obj3)//assign function is use to merge target and source
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);


console.log(tinderUser);
console.log(Object.keys(tinderUser));//imp
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty( 'isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
//course.courseInstructor
const {courseInstructor:Instructure} = course //Destructure
console.log(Instructure);

//API comes in the form of JSON(javascript object notation)

{
    name: "Gauri",
    courseName:"js in hindi",
    price: "free"
}

[
    {},
    {},
    {}
]
