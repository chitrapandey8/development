class Account {
    // Protected property convention
    _accountHolder;
    
    // Private property (Truly private)
    #balance; 

    constructor(name, initialBalance) {
        this._accountHolder = name;
        this.#balance = initialBalance;
        this.transactions = []; // Array to store history
    }

    // Getter for balance (Read-only for outside world)
    get balance() {
        return this.#balance;
    }

    // Protected-style method to modify balance
    _modifyBalance(amount) {
        this.#balance += amount;
        this.transactions.push({
            type: amount > 0 ? 'CREDIT' : 'DEBIT',
            amount: amount,
            date: new Date()
        });
    }


    processsInternatioaltransaction(amount,callback){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     if(amount>10000){
     reject("audit required")
    }else{
      resolve(callback)
    }
    },2000)
    
   })
}

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}


class InvestmentAccount extends Account{
    static INTEREST_RATE = 0.05
     #lockedfunds  = true
     

     set locked(status){
      this.#lockedfunds = status
     }

     _modifyBalance(amount){
       if(this.#lockedfunds == true && amount<0){
        throw new Error("chl be bareeb")
       } 
     }
}

const accountobj = new Account("chitranshi",50000)
accountobj._modifyBalance(10000)


const fs = require('fs').promises
async function generateMonthlystatemnt(accountobj){
  try{
   const {_accountHolder,transactions} = accountobj
   const filename = `statement_${_accountHolder}.txt`
   const  data = JSON.stringify(transactions)
   await fs.writeFile(filename,data)
  }catch(error){
   throw  new Error("file de")
  }
  
   
}
generateMonthlystatemnt(accountobj)



accountobj.processsInternatioaltransaction(1010101,()=>{console.log("transfer completed");
}).then((data)=>{
  data()
}).catch((err)=>{
console.log(err);
})