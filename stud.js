class stud{
    constructor(name,age){//constructor-special method in a class
        //console.log("constructor called")
        //console.log(name)
        this.name=name
        this.age=age
    }
 introduce()// method
 {
    console.log("hello my name is "+this.name)
    console.log("hello my age is "+this.age)
    }
    display(){
        console.log('welcome all')
    }
}
//new stud().introduce()
const studobj=new stud("anju",30)
studobj.display()
studobj.introduce()
const stuobj1=new stud("rahul",33)
stuobj1.introduce()








