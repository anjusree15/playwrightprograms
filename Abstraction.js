//abstraction-hiding implementation of functions

class coffeeMachine{
    #boilWater()
    {
        console.log('water Boiling')
    }
    #coffeeAdded(){
        console.log('coffe pwder added')
    }
    #addMilk(){
console.log('milk added')

    }
    #addTea(){
        console.log('tea pwder added')
    }
    makeCoffee(){
        this.#boilWater()
        this.#coffeeAdded()
        this.#addMilk()
    }
    makeTea(){
        this.#boilWater()
        this.#addTea()
        this.#addMilk()

    }

}
const coffeObj=new coffeeMachine()
coffeObj.makeCoffee()
coffeObj.makeTea()
