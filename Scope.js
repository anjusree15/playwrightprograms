//scope of variables

function login()
{
    var username='anju'//this is accessible only inside the function-block scope
    console.log(username)
}login()
 //console.log(username)error case

 if(true)
 {
    var firstname='anu'//var is function scope can be accessed anywhere
    console.log(firstname)
 }console.log (firstname)

 //block scope

 if(true)
 {
    let lastname='ann'// block scope can be accessed only inside the block
    console.log(lastname)
 }
 //console.log(lastname)

 if(true)
 {
    const middlename='maria'// block scope can be accessed only inside the block
    console.log(middlename)
 }
//console.log(middlename)

const gvar='I am a global variable'
function scopeExample()
{
    var fvar='I am a function variable'
    console.log(gvar)//yes
    console.log(fvar)//yes
    if(true)
    {
        let bvar='I am a block variable'
        console.log(gvar)//yes
        console.log(fvar)//yes
        console.log(bvar)//yes
    }
    //console.log(bvar)//no

}
//console.log(fvar)//no
scopeExample()
 


