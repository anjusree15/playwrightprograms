//callback function
function greet(){
    console.log('hello')
}
function demo(){
    console.log('demo func call')
}
function executeGreet(callback)

{
callback()
}
executeGreet(greet)//callback func call
executeGreet(demo)

