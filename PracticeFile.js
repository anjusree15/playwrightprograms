//Arrays
/* let numbers=[1,2,3,4,5]
console.log(numbers)
console.log(numbers[3])
numbers.push(6)
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
numbers.shift()
console.log(numbers)
console.log(numbers.length)
for (let j=0;j<numbers.length;j++)
{
    console.log(numbers[j])
}
for (let n of numbers)
{
    console.log(n)

}*/

/* vowels
let vowels="hello"
for (let k=0;k<vowels.length;k++)
{
    let v=vowels[k]
if (v=='a'||v=='e'||v=='i'||v=='o'||v=='u')
{
    console.log('vowel:',v)
}
else
{
console.log('not a vowel:',v)
}
}*/

//from given nos print only even nos

let nos=[1,2,3,4,5,6]
let evennumbers = []
for(let m=0;m<nos.length;m++)
{
    if (nos[m] % 2===0)
    {
        evennumbers.push(nos[m])
    }     
}
console.log("even numbers are " +evennumbers)

//Print odd numbers
let oddnumbers=nos.filter((x)=>{return x%2!==0})//filter method-to filter th elements in an array
console.log(oddnumbers)

//map to update all elements in an array
let mappedarray=nos.map((y)=>{return y*2})//double each element
console.log(mappedarray)

//Reduce -to reduce the elements in an array
//let nos=[1,2,3,4,5,6]
let summ=nos.reduce((a,b)=>{return a+b},0)//a-total, b-index 
console.log(summ)

//use reduce method to find multiplication
let multiple=nos.reduce((d,e)=>{return d*e},1)
console.log(multiple)



