# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\GetCall.spec.js >> GetCall
- Location: tests\API\GetCall.spec.js:2:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "provident"
Received string:    "quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto"
```

# Test source

```ts
  1  | import test, { expect } from '@playwright/test'
  2  | test('GetCall', async ({request}) => {
  3  | const ResponseDta=await request.get("https://jsonplaceholder.typicode.com/posts/1")//url from postman
  4  | //console.log (ResponseDta)
  5  | const jsonres=await ResponseDta.json()
  6  | console.log(jsonres)
  7  | const responsestatus=ResponseDta.status()
  8  | console.log(responsestatus)
  9  | const statustest=ResponseDta.statusText()
  10 | console.log(statustest)
  11 | expect(responsestatus).toBe(200)
  12 | expect(statustest).toBe("OK")
  13 | expect(ResponseDta.ok()).toBeTruthy()
  14 | expect(jsonres).toHaveProperty("userId",1)//to find property and value from JSON data
  15 | expect(jsonres).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
> 16 | expect(jsonres.body).toContain("provident")
     |                      ^ Error: expect(received).toContain(expected) // indexOf
  17 | })
```