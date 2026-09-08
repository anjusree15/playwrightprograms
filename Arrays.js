/* multiple values in a single variable */
let colors=['red','black','white','yellow']
console.log(colors)
console.log(colors[2])//indexing

//push method insert at the end of the array
colors.push('green')
console.log(colors)

//pop method remove from the end of the array
colors.pop()
console.log(colors)

//unshift method-beginning of the array
colors.unshift('grey')
console.log(colors)

//shift method-remove from beginning of the array
colors.shift()
console.log(colors)

//length method size of elements
console.log(colors.length)

console.log("looping array through for loop")
for (let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}

console.log("looping array using for of loop")
for (let c of colors)
{
    console.log(c)
}

//includes method-checking for an element in the array
console.log(colors.includes('red'))
console.log(colors.includes('violet'))

//indexof method-checking for an element in the array
console.log(colors.indexOf('black'))

//slice method-copying a portion of an array
const slicearray=colors.slice(1,3)//const or let 
console.log(slicearray)

//splice method-removing a portion of an array
console.log(colors)
//colors.splice(1,3)//1st index, 3 elements
//console.log(colors)

// by using splice method we can delete and add elements in an array-between
console.log(colors)
colors.splice(1,2,'violet','indigo')//1st index, 2 elements
console.log(colors)

let numbers=[1,2,3,4,5]
let sum=0
for(let i=0;i<numbers.length;i++)
{
    sum=sum+numbers[i]
}
console.log(sum)

// map method





