// You are building the backend core for a new banking application. You need to manage different types of accounts, handle secure transactions, and save records to the disk.



// **Note on "Protected" fields:** Since JavaScript does not have a native `protected` keyword, use the convention of an underscore prefix (e.g., `_accountHolder`) to indicate a property should be treated as protected (accessible by subclasses). Use `#` for true private fields.

// ### Phase 1: The Starter Code

// Review the base code below. You will use this as the foundation for your 5 tasks.

// JavaScript

const fs = require('fs').promises; // File System with Promises

// 1. Base Class: Account
class Account {
    // Protected property convention
    _accountHolder;
    
    // Private property (Truly private)
    #balance; 

    constructor(name, initialBalance) {
        this._accountHolder = name;
        this.#balance = initialBalance;
        this.transactions = []; // Array to store history
        bankDatabase.set(this._accountHolder,this.#balance)
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
        bankDatabase.set(this._accountHolder,this.#balance)
    }
    deposit(amount){
        this._modifyBalance(amount)
    } 

    processInternationalTransfer(amount,callback){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
             if(amount>10000){
                reject("audit required")
             }else{
                resolve()
             }
            },2*1000)
        })
    }

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}

// Global Data Structure to store all accounts
// Key: Account ID (String), Value: Account Object
const bankDatabase = new Map();


// task 1:

class InvestmentAccount extends Account{
 static INTREST_RATE = 0.5
 #lockedfunds = true

 constructor(name,initialBalance){
    super(name,initialBalance) //parent call ka constructor call krdega
 }

 set lockstatus(status){
    this.#lockedfunds = status
 }

 _modifyBalance(amount){
    if(this.#lockedfunds === true && amount<0){
        throw new Error("funds are locked")
    }
    super._modifyBalance(amount)
 }
}

const user = new Account("chitranshi",600000)
user._modifyBalance(4545454)
//task 2
async function generateMonthlystatment(accountobj){
   try{
    const {transactions,_accountHolder} = accountobj
    //transition data comes array format so we convert it into string
    const Data = JSON.stringify(transactions)
    //create file name for every user
    const filename = `statement_${_accountHolder}.txt`
    await fs.writeFile(filename,Data)
   }catch(error){
    throw new Error
   }
}

generateMonthlystatment(user)

//task 3
function callback(){}

user.processInternationalTransfer(5000,callback).then(()=>{
console.log("transfer completer");

}).catch((data)=>{
    console.log(data);
    
})

//task 4

function auditBankAssests(bankDatabase){
    let bankamount = 0
  for (const [key,Value] of bankDatabase ){
    if(Value<0){
        console.log(key);
        continue   
    }
    bankamount += Value
  }
   
}
auditBankAssests(bankDatabase)

//task 5
function endofday(){
    const acc = new Account("user",6000)
    const inv = new InvestmentAccount("user2",5000)

    acc.deposit(1000)
    inv.deposit(2000)

    Promise.all([generateMonthlystatment(acc),generateMonthlystatment(inv)]).then(()=>{
        console.log("statement generated");
        
    })
    auditBankAssests(bankDatabase)
}
endofday()

