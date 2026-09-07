//block of codes that can be reused
greet()// function call
console.log('my name is anju')
function greet()
{
console.log('Good Morning')

}greet()// function call

// function with parameter
function add(a,b)
{
//let a=20
//let b=10
console.log(a+b)
}
add(10,10)//arguments passed
add(5,5)

//returntype
function sub(c,d)
{
    return c-d
}
console.log(sub(30,15))//to just print the value
const result=sub(50,100)
console.log(result)// can be used for other cases

const mult=(m,n)=>{return m*n}//arrow function-shortest way of normal function
//mult(20,30)
console.log(mult(20,30))

const addition=(e,f)=>e+f
console.log(addition(10,15))




