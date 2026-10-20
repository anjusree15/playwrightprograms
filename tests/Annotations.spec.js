import {test} from "@playwright/test"
test.describe("grouping of test cases",()=>{
test.describe.configure({mode:"parallel",timeout:3000,retries:2})
    test ("annotation test", async ({page}) => {
    console.log("test started")

})
/*test.only("anntation test for only",async({page})=>{
     console.log("this is only test")
})*/

test.skip("annotation test for skip",async({page})=>{
    console.log("this test is skipped")
})
/*
test ("annotation test for fail",async({page})=>{
    console.log("this test is expected to fail")
    test.fail()
})*/

test ("annotation test for slow",async({page})=>{
    console.log("this test is expected to slow down")
    test.slow()
})
test .fixme("annotation test for fixme",async({page})=>{
    console.log("this test is expected to be fixed")
})
})

// hooks
