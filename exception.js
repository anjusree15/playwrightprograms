//exception-try ,catch ,finally
function division(a,b){
    if(b==0){
        throw new Error('b should not be zero')
    }
    return a/b
}

//try is used when code  have chances of getting error
try{
    let result=division(20,10)
console.log('result is ', result)
console.log("answer")
}
catch(error)// catch is used to handle the error only- if there is an exception
{
    console.log('exception is ',error)
    console.log('error msg is', error.message)
}
finally{
    console.log('finally block is executed')
}