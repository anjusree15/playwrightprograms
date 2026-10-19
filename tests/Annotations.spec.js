import {test} from "@playwright/test"
test ("annotation test", async ({page}) => {
    console.log("test started")

})
/*test.only("anntation test for only",async({page})=>{
     console.log("this is only test")
})*/

test.skip("annotation test for skip",async({page})=>{
    console.log("this test is skipped")
})

test ("annotation test for fail",async({page})=>{
    console.log("this test is expected to fail")
    test.fail()
})

test ("annotation test for slow",async({page})=>{
    console.log("this test is expected to slow down")
    test.slow()
})
