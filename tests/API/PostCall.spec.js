import test, { expect } from '@playwright/test'
test('PostCall', async ({request}) => {
const authData={
    "username" : "admin",
    "password" : "password123"
}
const postRes=await request.post("https://restful-booker.herokuapp.com/auth" ,
    {headers:{"Content-Type": "application/json"},data:authData})
const postjson=await postRes.json()
expect(postjson.token).not.toBeNull()
console.log(postjson)


//Booking Data
const BookingData={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const BookRes=await request.post("https://restful-booker.herokuapp.com/booking" ,
    {headers:{"Content-Type": "application/json"},data:BookingData})
    const postBookjson=await BookRes.json()
expect(postBookjson.token).not.toBeNull()
console.log(postBookjson)
expect(postBookjson.booking.firstname).toBe(BookingData.firstname)//assertion 
expect(postBookjson.booking.bookingdates.checkin).toBe
(BookingData.bookingdates.checkin)//nested object

})
