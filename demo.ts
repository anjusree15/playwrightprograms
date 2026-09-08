let empid:string="EMP001" //data declaration on ts
//empid=001
let mark:number=95
let abc:boolean=true
//let numbers=[1,2,3,4]//js
let numbers:number[]=[1,2,3,4]//ts

//object declaration in ts
let student:{
    name:string,
    mark1:number,
    IsPass:boolean
}={
    name:"anju",
    mark1:95,
    IsPass:true
}
//function without parameter
function add(){
    let a:number=20
    let b:number=30
    console.log(a+b)
}
add()
//function with params
function sub(x:number,y:number):number{
   // console.log(x-y)
   return x-y
}
//sub(100,50)
console.log(sub(100,50))

