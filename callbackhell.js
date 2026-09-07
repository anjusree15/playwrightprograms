//callback hell 
function test(){
    return new Promise((resolve)=>{

console.log('test func calling')
resolve()
})
}
//cb()

function demotest(){
    return new Promise((resolve)=>{

console.log('demotest func calling')
resolve()
    })
//cb1()
}
function demotest2(){
    return new Promise((resolve)=>{
console.log('demotest2 func calling')
resolve()
})
}
/*test(function(){
    demotest(function(){
        demotest2()
    })
})*/
test()
.then(()=>demotest())
.then(()=>demotest2())
.catch((error)=>console.error('error',error))


//promise- js object-fulfill, reject, pending
const promise=new Promise((resolve,reject)=>{
    let abc=true
    if(abc){
        resolve('Operation Successful')
    }
    else{
        reject('Operation rejected')
    }
})
//promise.then((msg)=>{
//console.log(msg)
//}
//).catch((errmsg)=>{
//console.log(errmsg)
//})
