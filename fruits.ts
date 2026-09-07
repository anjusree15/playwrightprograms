class fruits
{
    name:string
    price:number
    constructor(name:string,price:number){
        this.name=name
        this.price=price
    } display(){
        console.log("fruit name is" +this.name,"fruit price is" +this.price)
    }
    
}
let fruit1=new fruits("apple",100)
fruit1.display()