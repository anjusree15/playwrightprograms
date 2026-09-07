//Encapsulation-Data Hiding

class bankAccount{
    #balance; //private
    userName;
    constructor(currentBal,userName){
        this.#balance=currentBal
        this.userName=userName
    }
    deposit(dAmt){
        this.#balance+=dAmt
      
       console.log('deposit amount: ', dAmt)
        //console.log('Balance after deposit: ' ,this.#balance)

    }
    withDraw(wAmt){
        this.#balance-=wAmt
        console.log('withdraw amount:' , wAmt )
        console.log('Bal after withdraw: ', this.#balance)
    }
    showBal(){
        return this.#balance;
    }

}
const bObj=new bankAccount(1000,'anna')
bObj.deposit(2000)
console.log(bObj.userName)
//console.log(bObj.balance)
bObj.withDraw(500)
bObj.deposit(1000)
console.log('showbalance: ', bObj.showBal())



