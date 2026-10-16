class student
{
    constructor(name, mark1,mark2,mark3)
    {
        this.name=name
        this.mark1=mark1
        this.mark2=mark2
        this.mark3=mark3
    }
    avgMark()
    {
        let avg=(this.mark1+this.mark2+this.mark3)/3
        console.log("average mark of "+this.name+" is "+avg)
        
}
display()
{
    console.log("name: "+this.name)
    console.log("mark1: "+this.mark1)
    console.log("mark2: "+this.mark2)
    console.log("mark3: "+this.mark3)
}

}
const studobj=new student("anju",30,40,50)
studobj.display()
studobj.avgMark()
const studobj1=new student("rahul",50,60,70)
studobj1.display()
studobj1.avgMark()
const studobj2=new student("anu",70,80,90)
studobj2.display()
studobj2.avgMark()

