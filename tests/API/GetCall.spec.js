import test from '@playwright/test'
test('GetCall', async ({request}) => {
const ResponseDta=await request.get("https://jsonplaceholder.typicode.com/posts/1")//url from postman
//console.log (ResponseDta)
const jsonres=await ResponseDta.json()
console.log(jsonres)
})