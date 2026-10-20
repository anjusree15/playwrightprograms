import { afterEach, beforeEach } from "node:test"
import {test} from "@playwright/test"
test("hook test sample 1", async ({page}) => {
    console.log("hook 1st test started")
})
test("hook test sample2", async ({page}) => {
    console.log("hook 2nd test started")
})
test("hook test sample3", async ({page}) => {
    console.log("hook 3rd test started")
})
//used to run as common one for all test cases(eg login)
test.beforeAll(async () => {
    console.log("before all hook executed")
})

test.afterAll(async () => {
    console.log("execution stopped after all hook executed")
})
//before each test cases
test.beforeEach(async () =>{
    console.log("executed before each test cases")
})
//run after each test cases
test.afterEach(async () =>{
console.log("executed after each test cases")
})