 // {
//     var a = 10
//     let b = 20    //let and const are hosted in block scope while var in global scope
//     const c = 30

// const { rejects } = require('assert');
// const { setTimeout } = require('timers/promises');



//     var a = 20 //this i showding the variable a = 10 by a= 20
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
//console.log(b) //it will throw an error


//closures

// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()

// function x(){
//     var a = 7
//     function y(){   //u can also use return keywaord infront of function y
//         console.log(a)
//     }
//     console.log(a)
//     return y 
//       // we can return function when we retunr y it still matins it lexical scope and just only y was returned function with it lexical scope which we call closure was returned
// }
// var z = x()
// console.log(z)
// z()

// function name(){
//     var me  = "chitranshi"

//     function printname(){
//         console.log(me)
//     }
//     printname()
    
// }
// name()


//obj

// let user = {
//     name:"chiransi",
//     age:12
// }
// console.log(user.name)

// const lang = Object.freeze( {
//    name:"chita"
// })
// lang.name = "ty"
// console.log(lang)

// let smarthome = {
//     temp:22,
//     islighon:true
// }

// smarthome.securitysystem = "Active"

// console.log(smarthome)

// console.log(`the current temperatute is ${smarthome.temp}`)

// smarthome.temp = 18
// console.log(smarthome)


// delete smarthome.islighon
// console.log(smarthome)


// let bankaccount = Object.freeze(
//    {
//     accountno:98765,
//     balance:{
//         amount:50000
//     }
// }
// ) 

// bankaccount.balance = 233234534
// console.log(bankaccount);

// bankaccount.currency = "USD"
// console.log(bankaccount);


// bankaccount.balance.amount =  23766346
// console.log(bankaccount);

//functions

//f expression
//f equation
//arrow
//IIFE immediately invoked functioanl expression

// main()
// function main(){  //expression
//    console.log("hello");
   
// }
// main()

//equation
// let hello = function(){
//       console.log("hellooo");
    
// }
// hello()

//iife
// (function(){
//     console.log("hello");
    
// })();
//   //; for termination
// (function(){
//     console.log("hello");
    
// })()

// let sum = () =>{
//     console.log("hello");
// }
// sum()

// let sum = (a,b) => a+b;
// let ans = sum(2,3)
// console.log(ans);


// let sum = (a,b) => a+b;
// console.log(sum(2,3)) 


// let sum = (a=2,b=3) => a+b;
// let ans = sum()
// console.log(ans);

// function tocelsuius(F){
//     return (F - 32)*5/9;
// }
// let ans = tocelsuius(45)
// console.log(ans);

// let isfreezing = (temp) => {
//    if(temp<=0){
//     return true
//    }
//    return false
// }
// let ans1 = isfreezing(1)
// console.log(ans1);

// function test(temp){
//     let c = tocelsuius(temp)
//     console.log(isfreezing(c));
// }
// test(45)
// console.log(ans3);


// (()=>{
//     securitycode = 4
//     console.log(`system initialased with keyword ${securitycode}`);
    
// })()
// console.log(securitycode);

//prototype sepcial object that carry behavious 
//how to create your own prototype

// function main(){
 
// }
// main.prototype.Greet = function(){  //main ka prottotype ye kuch bhi ho skata hai 
//     console.log("hello");
    
// }

// delete main.prototype.Greet
// function main2(){
// let obj = new main()
// obj.Greet()
// }
// main2()


// function main(){

// }
// main.prototype.random = {
//     randomnumbergenerater:function(){
//        console.log(Math.random())
//     }
// }

// function geeneratenumber(){
//     let number = new main();
//     number.random.randomnumbergenerater()

// }
// geeneratenumber()

//rest and spread

// function main(a,b){
//   console.log(a);
//   console.log(b);
 
// }
// main(2,3)

// function main(a,...b){
//     console.log(a);
//     console.log(b);
    
    
// }
// main(1,2,3,3,3)

// let arr1 = [1,2,3]
// let arr2 = [4,5]
// let arr3 = [...arr1, 4, 5]
// let arr4 = [...arr1, ...arr2]
// console.log(arr3);
// console.log(arr4);


//spread
// let obj1 = {
//     name:"chitra"
// }

// let obj2 = {
//     name2:"bhoomi"
// }

// let obj3 = {
//     ...obj1, ...obj2
// }
// console.log(obj3);

//desteuctung

// let arr = [{name:"js"},{name:"ts"}]
// let [a,b] = arr
// console.log(a);
// console.log(b);

// let lang = {
//     name:"chitranshi",
//     email:"hssv"
// }

// let {name, email} = lang
// console.log(name);
// console.log(email );


//loops 
//forof---Array pe iteration ke liye
//forin -- object pe iteration ke liye

// let arr = [1,2,3,4,5]

// for (let i of arr) {
//     console.log(i);
    
// }


// let obj = {
//     name:"chitranshi",
//     age:34
// }
// for (let key in obj) {
//    console.log(key);
//    console.log(obj[key]);   
// }

//obj pe iterstion

// let a = Object.keys(obj)
// console.log(a);
// // let b = Object.values(obj)
// // console.log(b);

// let c = Object.entries(obj)
// console.log(c);

//for of ka use karke obj pe itreration

// for (let i of a){
//     console.log(i);
    
// }

//map, filter, reduce, every, find, for each

// let arr = [1,2,3,4,5]
// let a = arr.map((i)=>{
//    return i*2;
// })
// console.log(a);

// let b = arr.filter((i)=>{
//     return i%2==0;
// })
// console.log(b);

// let c = arr.reduce()

// function machine(data){
//   return data*2
// }
// const ans = arr.map(machine)
// console.log(ans);

//arr.forEach((i)=>i*2)

// function even(data){
//     return data%2 == 0
// }
// let c = arr.filter(even)
// console.log(c);

// let friends = ['sam','samesh','rahul']

// let f = friends.filter((i)=>{
//     return i.startsWith('s') === true
// })
// console.log(f);

//every

// let arrr = ["a","b","c"]
// let ans = arrr.every((i)=>{
//     return typeof i === 'string'
// })
// console.log(ans);

// let ans1 = arr.find((i)=>{
//    return i === 6
// })
// console.log(ans1);


// let arr = [1,2,3,4,5]
// let a = arr.reduce((sum,i)=>{
//   return sum+i;
// },0)


// console.log(a);


// const products = [
//   { name: 'Apple', price: 1.5, category: 'Fruit' },
//   { name: 'Onion', price: 0.8, category: 'Vegetable' },
//   { name: 'Steak', price: 12.0, category: 'Meat' },
//   { name: 'Banana', price: 1.2, category: 'Fruit' },
//   { name: 'Carrot', price: 0.5, category: 'Vegetable' }
// ];


// const users = [
//   { id: 1, name: 'Alice', age: 22, hasID: true },
//   { id: 2, name: 'Bob', age: 17, hasID: true },
//   { id: 3, name: 'Charlie', age: 25, hasID: false },
//   { id: 4, name: 'David', age: 30, hasID: true }
// ];

// let a = products.filter((i)=>{
//     return i.category === 'Fruit';
// })

// console.log(a);


// let b = products.map((i)=>{
//   return i.name;
// })
// console.log(b);

// let c = products.reduce((sum,i)=>{
//     return i.price+sum;
// },0)
// console.log(c);

// let a2 = users.find((i)=>{
//     return i.hasID === false;
// })
// console.log(a2);

// let a3 = users.every((i)=>{
//   return i.age>18
// })
// console.log(a3);


// users.forEach((i)=>{
//     console.log( `checking acces for name ${i.name}`);
   
// })


// const user = {id: 1, name: 'alice', age: 234}
// // console.log(Object.keys(user));
// // console.log(Object.values(user));

// let arr = Object.entries(user)
// console.log(arr);


// // Object.entries(user).forEach((i)=>{
// //     console.log(i);

// // })
// let [ab,bb] = arr


// let [a,b] = ab
// console.log(a,b);


// console.log(ab);
// console.log(bb);



// class Car{

//   static name = "BMW"
//   constructor(name,age){
//     this.name=name
//     this.age=age}
  
//   static message(){
//     console.log(`this is my car ${this.name}`)
//   }
//   }

  // const obj = new Car("BMW",333)
  // console.log(obj.age);
  
  // obj.message()
  
//static get set

//static bina obj banaye claass ke varivale or methods ko acces karne ke liye
// console.log(Car.name);
// Car.message();


// class User{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }

//   get details(){
//     console.log(`the user is ${this.name} age is ${this.age}`);
//   }

//   set Setage(age){
//     if(age>0){
//       this.age = age
//     }
//   }
// } 

// let obj = new User("chitranshi",18)
// obj.details  // not a function
// obj.Setage = 13;
// obj.details

// class bankaccount{
//   constructor(accholder,balance){
//     this.accholder=accholder
//     this._balance=balance
//   }
//   set setbalance(balance){
//     if(balance<0){
//       console.log("insuffinert balance");
//     }else{
//       this.balance=balance
//     }
//   }
//   get getbalance(){
//      console.log(`&${this.balance}`);
     
//   }
//     withdraw(amount){
//     this.balance = this.balance - amount;
//   }
// }

// let obj = new bankaccount("chitranshi",100000)
// obj.getbalance
// obj.setbalance = 100000000000
// obj.getbalance
// console.log(obj.withdraw(2))


// class book{
//   static totalbook = 0


//   constructor(title,author,price){
//     this.title=title
//     this.author=author
//     this.price=price
//     book.totalbook += 1;
//   }

//   static campareprice(bookA, bookB){
//    if(bookA.price>bookB.price){
//     console.log(`${bookA.title}`);
    
//    } else{
//     console.log(`${bookB.title}`);
    
//    }
    
//   }
// }

// let obj1 = new book("rich dad poor dad","chitranshi",1000)
// let obj2 = new book("rich dad poor dad!","chitr",100)
// book.campareprice(obj1,obj2)


 
// function A(){
//   let name = "chitranshi"
//   function B(){
//     let name1 = "chita"
//     console.log(name1);
    
//   }
//   console.log(name);
  
//   return B;
// }

// let a = A()
// a()

//this
//arroe ka koi kuch this nhi hota arrow ke case mai voh parent mai jake check karega, function expression ke pass this hlta hai tph arrow ke case mai undefined dega 
//har obkect , refrence ki tarah kaam karta h, this batata h ki kis pe mai kaam karta hu

// let obj = {
//   name:"JS",
//   greet:function(){
//     setTimeout(()=>{
//       console.log(this.name);
      
//     },1000)

//   }
// }
// obj.greet()

// let obj = {
//   name:"JS",
//   greet:()=>{
//     setTimeout(()=>{
//       console.log(this.name);
      
//     },1000)

//   }
// }
// obj.greet()

// let lang = {
//   name:"'js",
//   greet:function(){
//     console.log(this.name); //konsa cureent object h jispe mai kaam karri hu
    
//   }
// }
// let abb = lang.greet
// abb.call(lang) //call and apply imeediately execute hote ahi
//lang.greet() == this.greet() 
// let abb = lang.greet //undefined ayega coz abb ke andar sirf greet function jayega

// abb()

// let abb = lang.greet.bind(lang)
// abb()


// function message(city){
//   console.log(`hello this is ${this.name} and city ${city}`);
  
// }
// let user = {
//   name:"chitranshji"
// }
// //const abb = message.bind(user)
// //abb("xyz")

// //message.call(user,"agra") //direct excute hota hai
// message.apply(user,["agra"]) //direct excute hota hai

//map and date

// const map = new Map() //data store krta hai key value mai
// map.set('name','Js')
// map.set('nage','Jhs')
// console.log(map);

// console.log(map.get('name')); //value ko assce karn eke liye
// console.log(map.has('name'));
// console.log(map.delete('name'));
// console.log(map);

//date
// const date = new Date()
// console.log(date.getDate());
// console.log(date.getDay());

// const users = [
//   { name: "Anurag", score: 80 },
//   { name: "Rahul", score: 45 },
//   { name: "Priya", score: 92 }
// ];

// function evaluate(passingMarks, bonus) {
  
  
//   return {
//     name: this.name,
//     finalScore: this.score + bonus,
//     status: this.score + bonus >= passingMarks ? "Pass" : "Fail"
//   };
// }

// let arr = []
// users.forEach((user) => {
//   arr.push(evaluate.apply(user,[60,10]))
// })

// const items = [
//   { id: 101, name: "Laptop", price: 60000 },
//   { id: 102, name: "Mouse", price: 1500 },
//   { id: 101, name: "Laptop", price: 60000 },
//   { id: 103, name: "Keyboard", price: 3000 },
//   { id: 102, name: "Mouse", price: 1500 }
// ];

// let map = new Map();
// items.forEach((i) => {
//   let {id,name,price} = i
//   if(map.has(i.id)){
//     let item = map.get(id)
//     item.quantity += 1
//   } else{
//     let quantity = 1
//     map.set(i.id,{name,price,quantity})
//   }
// });
// console.log(map);



//callback or fucntioanl argument


// function add(a,b){
//   return a+b
// }

// function sub(a,b){
//   return a-b
// }

// function res(a,b,cb){
//   return cb(a,b)
// }

// let  ans = res(2,3,add) 
// console.log(ans);

// function a(fn){
//   fn
// }

// a(function b(){
//   console.log("hello");
  
// })

// function a(fn){
//     fn()
// }

// function b(){
//   console.log("name");
  
// }
// a(b)

// const fs = require('fs')

// console.log("hello");

// const ans = fs.readFileSync('./a.txt','utf-8') //encoder
// console.log(ans);


// const fs = require('fs')

// console.log("hello");
// function Callback(err,data){
//     if(err){
//       console.log(err);
      
//     }else{
//       console.log(data);
      
//     }
// }
// fs.readFile('a.txt','utf-8',Callback)
// console.log("hello2");


//promise -- ye bata h ki koi bhi asynce operation ya toh complete hua ya nhi 
// const fs = require('fs')
// function Readfilepromise(file){
//   const p = new Promise(function(resolve,reject){
//     fs.readFile(file,'utf-8',(err,data)=>{
//       if(err){
//         reject("error")
//       }else{
//         resolve(data)
//       }
//     })
//   })
//   return p
// }
// Readfilepromise('').then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//  console.log(err);
 
// }).finally(()=>{
//   console.log("okok");
  
// })

// function timeout1(){
//   return new Promise((resolve)=>{
//      setTimeout(()=>{
//       console.log("hello1");
//       resolve("hello1")
//      },2000)
//   })
// }
// function timeout2(){
//   return new Promise((resolve)=>{
//      setTimeout(()=>{
//       console.log("hello2");
//       resolve("helllo2")
//      },4000)
//   })
// }
// function timeout3(){
//   return new Promise((resolve)=>{
//      setTimeout(()=>{
//       console.log("hello3");
//       resolve("hello3")
//      },6000)
//   })
// }
// Promise.all([timeout1(),timeout2(),timeout3()]).then((data)=>{
//   console.log(data);
  
//   console.log("hello");
  
// })


// function settimeoutpromisified(time){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve()
//     },time*1000)  //settimtout complete hone ke baad resolve ko call kar deta
//   })
// } 

// settimeoutpromisified(1).then(()=>{
//     console.log("1");
//     settimeoutpromisified(3).then(()=>{
//       console.log("2");
//       settimeoutpromisified(5).then(()=>{
//         console.log("3");
        
//       })
//     })
// })

// settimeoutpromisified(1).then(()=>{
//   console.log("1");
//   return settimeoutpromisified(3).then(()=>{
//     console.log("2");
//     return settimeoutpromisified(4).then(()=>{
//       console.log("3");
      
//     })
//   })
  
// })

//asynce -- syntatical better way to write callback

// async function main() {
//   await settimeoutpromisified(1);
//   console.log("1");
//   await settimeoutpromisified(3);
//   console.log("3");
//   await settimeoutpromisified(5);
//   console.log("5");
  
// }
// main()

//micro -- prirorty task, peheel execute hote h, promise
//macro -- settimeout, baad mai hote h micro

// function resolvesafter2sec(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("resolved")
//     },2000)
//   })
// }


// async function ok(){
// console.log("before");
// console.log("jkdhjhdg");
// let data = await resolvesafter2sec(); //jab ye line resolve hogi tab hi uske ki aage ki lines hihi
// console.log(data);
// console.log("after 2 sec");
// }
// ok()



//////////////////////////////////////////////////////////////////////////


// const fs = require('fs')

// function readfilepromise(){
//   return new Promise((resolve,reject)=>{
//       fs.readFile('a.txt','utf-8',(err,data)=>{
//         if(err){
//           reject("error")
//         } else{
//           resolve(data)
//         }
//       })
//   })
// }

// readfilepromise().then((data)=>{
// console.log(data);

// }).catch((err)=>{
// console.log(err);

// })


// const { resolve } = require('dns')
// const fs = require('fs')

// function writetofile(){
//     return new Promise((resolve,reject)=>{
//       fs.writeFile('a.txt',"hellooo",(err)=>{
//         if(err){
//           reject(err)
//         } else{
//           resolve("hogaya")
//         }
//       })
//     })
// }

// writetofile().then((data)=>{
// console.log(data);

// }).catch((err)=>{
// console.log(data);

// })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Account {
//     // Protected property convention
//     _accountHolder;
    
//     // Private property (Truly private)
//     #balance; 

//     constructor(name, initialBalance) {
//         this._accountHolder = name;
//         this.#balance = initialBalance;
//         this.transactions = []; // Array to store history
//     }

//     // Getter for balance (Read-only for outside world)
//     get balance() {
//         return this.#balance;
//     }

//     // Protected-style method to modify balance
//     _modifyBalance(amount) {
//         this.#balance += amount;
//         this.transactions.push({
//             type: amount > 0 ? 'CREDIT' : 'DEBIT',
//             amount: amount,
//             date: new Date()
//         });
//     }


//     processsInternatioaltransaction(amount,callback){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      if(amount>10000){
//      reject("audit required")
//     }else{
//       resolve(callback)
//     }
//     },2000)
    
//    })
// }

//     displaySummary() {
//         console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
//     }
// }


// class InvestmentAccount extends Account{
//     static INTEREST_RATE = 0.05
//      #lockedfunds  = true
     

//      set locked(status){
//       this.#lockedfunds = status
//      }

//      _modifyBalance(amount){
//        if(this.#lockedfunds == true && amount<0){
//         throw new Error("chl be bareeb")
//        } 
//      }
// }

// const accountobj = new Account("chitranshi",50000)
// accountobj._modifyBalance(10000)


// const fs = require('fs').promises
// async function generateMonthlystatemnt(accountobj){
//   try{
//    const {_accountHolder,transactions} = accountobj
//    const filename = `statement_${_accountHolder}.txt`
//    const  data = JSON.stringify(transactions)
//    await fs.writeFile(filename,data)
//   }catch(error){
//    throw  new Error("file de")
//   }
  
   
// }
// generateMonthlystatemnt(accountobj)



// accountobj.processsInternatioaltransaction(1010101,()=>{console.log("transfer completed");
// }).then((data)=>{
//   data()
// }).catch((err)=>{
// console.log(err);

// })

// function settimeoutt(time,callback){
//     let starttime = Date.now()
//     while(true){
//       let currenttime = Date.now()
//       if(currenttime-starttime>=time){
//         callback()
//         return
//       }
//     }
// }

// function hello(){
//   console.log("hello");
  
// }
// settimeoutt(2000,hello)

// function math(){

// }

// math.prototype.sum = function(...nums){
//     let ans = nums.reduce((sum,defaul)=>{
//        return sum + defaul
//      },0)

//      return ans;
// }

// let obj = new math()
// let ans1 = obj.sum(1,2,3,4,5)
// console.log(ans1);


// console.log('A');                                                                                                                                                      // ye synchornus task h sabse pehele excute hoga

// setTimeout(() => {                                                                                                                                                        //ye macro task h isko sabse last mai priority milegi
//     console.log('B');
// }, 0);

// Promise.resolve().then(() => {                                                                                                                                     //pehela .then(c) micro queue mai jayega, uske sath sath dusra .then(D) nhi jayega qunki voh pehele .then  ke excute hone ka wait karega jaise hi pehrla ec=xcute ho jaayga yr quue mai ajyage
//     console.log('C'); 
// }).then(() => {
//     console.log('D');
// });

// async function flow() {
//     console.log('E');                                                                                                                                                   //aab await se pehele wala sunchronoyly chalega 
//     await Promise.resolve();
//     console.log('F');                                                                                                                                              // ab ye wala c ke baad queue mai ajyega 
// }
// flow();   

// console.log('G');                                                                                                                                                  // ye bhi synchrous h toh ye bhi excite ho jayega 

//so iska output hoga //aegcfdb







