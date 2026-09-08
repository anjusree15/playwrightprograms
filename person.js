class Person
{
    constructor(degree,dob){
        this.degree=degree
        this.dob=dob
    }
    PersonDetails(){
        console.log('Degree Achieved: '+this.degree)
         console.log('Dob: '+this.dob)
    }

}
const personobj=new Person('master degree',new Date("1995-05-02"))
personobj.PersonDetails()
const personobj1=new Person('Bachelor Degree',new Date("1995/04/01"))
personobj1.PersonDetails()
