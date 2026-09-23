import test from "@playwright/test"
test ("promptbox",async({page})=>{
await page.goto("https://selenium.qabible.in/date-picker.php")
await page.locator(".form-control.datepicker").click()
await page.locator(".datepicker-days th.datepicker-switch").click()
await page.locator(".datepicker-months th.datepicker-switch").click()
const targetyear=2016
const targetmonth=6
const targetdate=12
while(true)
{
    const currentRange=await page.locator(".datepicker-years th.datepicker-switch").textContent()
    console.log(currentRange)
    const startRange=currentRange.split("-")[0]
    console.log(startRange)
    const endRange=currentRange.split("-")[1]
    console.log(endRange)
    if(targetyear>=startRange && targetyear<=endRange)//2016>=2020 && 2016<=2029, 2016>=2010 && 2016<=2019
    {
        break
    }
   
    if(targetyear<startRange)
    {
        await page.locator(".datepicker-years th.prev").click()
    }
    else 
    {
         await page.locator(".datepicker-years th.next").click()
    }
}
//await page.getByText(targetyear.toString(),{exact:true}).click()
await page.locator("span.year",{ hasText: targetyear.toString()}).click()
await page.locator(".month").nth(targetmonth-1).click()
await page.waitForTimeout(3000)
})