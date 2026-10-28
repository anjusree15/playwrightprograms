import test, { expect } from '@playwright/test'
test('GetCall', async ({request}) => {
const ResponseDta=await request.get("https://jsonplaceholder.typicode.com/posts/1")//url from postman
//console.log (ResponseDta)
const jsonres=await ResponseDta.json()
console.log(jsonres)
const responsestatus=ResponseDta.status()
console.log(responsestatus)
const statustest=ResponseDta.statusText()
console.log(statustest)
expect(responsestatus).toBe(200)
expect(statustest).toBe("OK")
expect(ResponseDta.ok()).toBeTruthy()
expect(jsonres).toHaveProperty("userId",1)//to find property and value from JSON data
expect(jsonres).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
expect(jsonres.body).toContain("aut")

})