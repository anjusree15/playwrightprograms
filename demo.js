"use strict";
let empid = "EMP001"; //data declaration on ts
//empid=001
let mark = 95;
let abc = true;
//let numbers=[1,2,3,4]//js
let numbers = [1, 2, 3, 4]; //ts
//object declaration in ts
let student = {
    name: "anju",
    mark1: 95,
    IsPass: true
};
//function without parameter
function add() {
    let a = 20;
    let b = 30;
    console.log(a + b);
}
add();
//function with params
function sub(x, y) {
    // console.log(x-y)
    return x - y;
}
//sub(100,50)
console.log(sub(100, 50));
