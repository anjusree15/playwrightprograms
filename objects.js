
//objects
let student={
name:'anna',//properties
age:30,
course:'playwright'
}
console.log(student.course)//dot notation
console.log(student["name"])//bracket notation
console.log(student)

//for in loop -loop used for objects
for(let stu in student)//stu denotes properties
{
    console.log(stu +":" +student[stu])//object[key], plus sign is used to concatenate 

}
//add
student.gender='Female'
console.log(student)

//update
student.age='35'
console.log(student)

//delete
delete student.course
console.log(student)

//Array of objects
let employees=[
    {
        empid:12,
        empname:'anju'

    },
    {
        empid:10,
        empname:'alan'
    },
    {
        empid:15,
        empname:'meenu'
    }
]
    console.log(employees[0])//index
    console.log(employees[0].empname)

    for(let em of employees)//looping array of objects
        {
            //console.log(em)
            console.log(em.empname) 

    }
    //nested object
    let laptop={
        brand:"dell",
         color:"black",
         price:35000,
         specification:{//nested object
            storage:64,
            ram:2400
         } 
        }
        console.log(laptop.specification.ram)
        let tv={
            brand:"toshiba",
            isOfferProduct:true,//boolen value
            colors:['red','black','silver'],//array declarition inside object
               details:function ()//func declaration inside an object
               {
                console.log(this.brand)
                console.log(this.isOfferProduct)
               }

        }
        console.log("function call")
        tv.details()
        console.log(tv.colors)
        console.log(tv.colors[0])