"use strict";
//variable decleration
Object.defineProperty(exports, "__esModule", { value: true });
// let name:string = "JS"
// let isactive:boolean = true
// let int:number = 556
// let n:any = 898  //ye check nhi krta or not recommended
// //let mm:never =  44    //infineteloop or error throw
// //function decleration
// const sum  = (a:number,b:number):number=>{
//     return a+b
// }
// let ans = sum(2,3)
// //3.log(ans);
// //union type
// let song:string | number | boolean = true  
// //regix repression
// let reg:RegExp = /\d/  //its type is object
// //////////////////////arrays && tuples/////////////////////////////////////
// let stringArr = ["one","two","three"]
// let guiters = ["hello",774]
// let mixeddata = ["one",true,32676732]
// stringArr.push("abcd")
// guiters = stringArr
// mixeddata.push(true)
// mixeddata.push("string")
// mixeddata.push(5467)
// //array decleartion
// let value:string[] = []
//  value.push("A")
//  console.log(value);
//  console.log(value.includes('A'));
//  let myuname = "Chitranshi" as string
//  let myunamee = <string>"Chitranshi"
//  console.log(myuname.startsWith("c")
// )
// //tuple -- her index ka type dete hai
// let namemee:[string , number , boolean] = ["ee",3,true]
// //ek array ke andar tuple daal sakte hai lekin tupe mai array nhi daal sakte maybe infuture kisis index ki value chage karo
// let obj = {
//     name:"TS"
// }
// let objjj = {}
// let obbjjjj = []  //array bhi ek obj hai
// //object ka tye dene ke liye
// interface Iuser{
//   name:string,
//   roolno:number
// }  
// type Iuser1 = {
// }
// let p:Iuser = {
//     name:"vhitargs",
//     roolno:33
// }
// console.log(p.name);
// interface user{
//     name?:string,
//     emaail:string,
//     rollno:number,
//     phooneno:number,
//     isactive?:boolean
// }
// let userobh:user = {
//     name:"chitrabshu",
//     emaail:"634764hgefhg",
//     rollno:3443,
//     phooneno:78347483
// }
// function userrr(userobh:user){
//     if(!userobh.name){
//       return "pls give name"
//     }else{
//         return `hello ${userobh.name}`
//     }
// }
// console.log(userrr(userobh));
// function ErrorMessage(){ //iska type never hai 
//     throw new  Error("someen")
// }
// //type alias --bteer syntatical way
// //interfaces ki help se obj ka type dete hai
// //type -- ksisi ka bhi type de sakte hai
// type Username = string
// let namee:Username = "chiysh"
// type mixedarray = (string | number | boolean)[]
// let array:mixedarray = ["ncjkddjnk",7893,true]   
// type mathfunction = (a:number, b:number) => number 
// const summ:mathfunction = (a,b) => a+b
// function mathfunction(a:number, b?:number){
//    if(b===undefined){
//     return a
//    }
//    return a+b
// } 
//rest operator
// function summm(a:number,b:number,...c:number[]):number{
//    console.log(a,b);
//   let ans =  c.reduce((sum,def)=>{
//       return sum +def
//    },0)
//    return ans
// }
// summm(1,2,3,3,3,3,3)
//union and intersaction
// we use type narrowing using unionn --maybe be ye la sakte ya dusra dono mai se koi bhhi la sakta hai
// type A = {name:string}
// type B = {age:string}
// type  C = A|B
// function main2(obj:C){
//     if("name" in obj){
//         console.log(obj.name);
//     }
// }
// const obj = {
//     name:"chitarnshi",
//     age:33
// }
// main2(obj)
// intersection
//enum --constant ko name dene ke liye --
// enum direction{
//    up,down,right
// }
// console.log(direction.down);
//type assertion--more specific type ke liye -specific type dene ke liye
// type isactive = "succes" | "failure" --pehele hi bata deya ki ye do tarah ka hi data le sakjat ya toh sucess ya failure
// type one = string --less
// type two = string | number -less
// type three = "hello" 
// const data22:one = "hello"
// const data111 = "hello" as two
//! mark deiya toh ye value optional nhi honi chhaiye
// const img = document.querySelector('img')!
// const imgg = document.querySelector('img') as HTMLImageElement --typeassertion
// console.log((img.src));
//classes and object
// interface USer{
//     name:string
//     age:string
//     data:(name:string,age:string) => string
// }
// class coder implements USer{
//     constructor(private name:string){} // -- constructo ko name dena hota hai
// }
//classes mai interface type deifnr kr liyr nhi strucrute ke liye hotahai ki kis kis trah ka data hoga
// class code implements USer{
//      name:string
//     age: string
//     constructor(name:string,age:string){
//         this.name = name
//         this.age = age
//     }
//     data(name: string, age: string){
//         return `vvghvgvvgh`
//     }
// }
// const c1 = new code("someone","djk")
// const data = c1.data("soeneke","yuedwdh")
// console.log(data);
// //inheritnce
// class coder1 extends code{
//     constructor(public name:string,age:string,public lang:string[]){
//         super(name,age)
//         this.lang = lang
//     }
//     dataa(){
//         console.log(this.lang);
//     }
// }
// class code2r1 extends code{
//     constructor(readonly name:string,age:string,public lang:string[]){ //name sirf read ho sakta hai
//         super(name,age)
//         this.lang = lang
//     }
// }
// const ca =  new coder1("A", "B",["A","B"])
// ca.dataa()
///abstractclass --we use abstract in place of interface
// abstract class car{
//     abstract engine():void
//     start(){
//         console.log("engine start");
//     }
//     stop(){
//         console.log("engine stop");
//     }
// }
// class bmw extends car{
//     engine(): void {
//      console.log("v1");
//     }
// }
// const carrr = new bmw()
// carrr.engine()
//interface types object type akias assertion class  uniion  intersectuion  funvtionsd optionas sprea
// type  sumtype = (a:number,b:number) => number  
// let  sum:sumtype  = (a,b) => a+b
// type user = string | number | boolean -- type aliass 
// let emila:user
// type user = "sucesss" | "failure"
// let userr:user = "hello"
// interface user {
//     name:string
//     detail(a:string):string
//     deta: () => string
// }
//unionn
// type A = {name:string}
// type B = {age:string}
// type C = A|B
//  let obj = {
//     name:"chsusdyh",
//     age:"djnkdbhj" }
// function main(obj:C){
//   if("name" in obj){
//     console.log(obj.name);
//   }
//   if("age" in obj){
//     console.log(obj.age);
//   }
// }
// main(obj)
// interface user{
//     name:string
//     age:string
//     phone?:number
// }
// let obj:user = {
//     name:"ndhhjdbbdj",
//     age:"dkmdjnk",
//     phone:46734673786
// }
// function sum(a:number,b?:number):number{
//   if(b == undefined){
//     return a
//   } else{
//     return  a+b
//   }
// }
// // let a = sum(2)
// // console.log(a);
// //spreadd
// function summ(a:number,b:number,...c:number[]){
// return a+b + c.reduce((sum,def)=>{
//   return sum + def
// },0)
// }
// let s = summ(1,2,1,2)
// console.log(s);
// interface userin{
//     name:string,
//     age:number
//     sum: (a:number,b:number) => number
// }
// class user implements userin{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//       this.name=name
//       this.age=age
//     }
//     details(){
//        return `This person is ${this.name} her age is ${this.age}`
//     }
//     sum(a:number,b:number):number{
//      return a+b
//     }
// }
// let chiiii = new user("chitranshi" , 4334)
// console.log(chiiii.details());
// let ans =  chiiii.sum(2,3)
// console.log(ans);
//static keyword
// class user{
//     static count:number = 0
//     static getcount():number{
//           return user.count  
//     }
//     constructor(public name:string){
//         this.name = name
//         user.count = ++user.count
//     }
// }
// const ob = new user("A")
// const og = new user("A")
// console.log(user.getcount());
// class Bands{
//     private bandMembers:string[]
//     constructor(){
//         this.bandMembers=[] //constructor class hote hi array intailise
//     }
//     public get showData():string[]{
//         return this.bandMembers
//     }
//     public set setData(value:string[]){
//         if(Array.isArray(value) && value.every((data)=>typeof data === "string")){
//             this.bandMembers = value
//         }else{
//             throw new Error("this is invalid")
//         }
//     }
// }
// const ans3 = new Bands()
// ans3.setData = ["edd","jnkfn","hjd"]
// console.log(ans3.showData);
// //ek naya or add karna hai
// ans3.setData = [...ans3.showData,"masn"]
// console.log(ans3.showData);
// let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// let water = 0;
// function trap(height: number[]){
//     let n = height.length;
//     for(let i = 1; i<n-1; i++){
//         let left = i;
//         let right = i;
//         let leftmax = -1;
//         let rightmax = -1;
//         while(left>=0){
//             leftmax = Math.max(height[left]!,leftmax!);
//             left--;
//         }
//         while(right<=n-1){
//             rightmax = Math.max(height[right] as number,rightmax);
//             right++;
//         }
//         let  min = Math.min(leftmax,rightmax);
//         water += min - height[i]!;
//     }
//     console.log(water);
// }
// trap(height);
//index ka type dean--index signature
// interface user{
//     [key:string]:number
//     age:number
// }
// const user1:user = {
//     name:4,
//     age:23
// }
//readonly
// interface user{
//    readonly [key:string]:number
//     age:number
// }
// const user1:user = {
//     name:4,
//     age:23
// }
// name cant be accesa>
// console.log(user1.age)
//generics
// interface Income{
//     [key:string]:number | string
// }
// type Incomee = "salary" | "bonus" | "sidehustel"
// type inc = Record<Incomee,number | string> --interface og key
// let Inc:inc = {
//     salary: 478935,
//     bonus:6732,
//     sidehustel:"jvfjnkfv"
// }
// for(const key in Inc){
//     console.log(Inc[key as keyof inc]); //key ka type nikal lega interface se
// }
// for(const key in Inc){
//     console.log(Inc[key as keyof typeof Inc]); 
// }
//generic-- provides the faicility of givinh type at runtime(kisi bhi tarah ka data de sakte ho mai khud hi infer kar luga)
// argument mai kucihi bhi pss kar sakti hu --for more type safetly
// const func = <T>(arg:T):T => arg   //<T>bolra h kuch bhi type dedo</T>
// interface boolcheck<T>{
//     arg:T
//     isObject:boolean
// }
// const isobj = <T>(arg:T):boolcheck<T> => {
//     if(typeof arg === 'object' && !Array.isArray(arg) && arg != null){
//         return {arg,isObject:true}
//     }
//     return {arg,isObject:false}
// }
// console.log(
//     isobj({name:"JS"}),
//     isobj([56]),
//     isobj(true),
//     isobj(null)
// );
// const user = [{name:"chitanshi"},{name:"hello"},{name:"okok"}]
// interface hasname{ //extends is used to exetnd intefrcer honi hi chaiye
//     name:string
// }
// const fun = <T extends hasname,K extends keyof T>(arg:T[],key:K):T[K][]=>{
//  return arg.map((user)=>user[key])
// }
// fun(user,"name")
// class User<T>{
//     name:T
//     constructor(name:T){
//         this.name = name
//     }
//     get user():T{
//         return this.name
//     }
// }
// const user1 = new User<string>("js")
// console.log(user1);
//generic funtion
// function namef<T>(name:T){
// console.log(name);
// }
// namef("hjkch")
//generic fucntion
//   interface user<T>{
//     data:T
//     sucess:boolean
//   }
//  function print<>(id:T){
//   if(typeof id === 'string'){
//     console.log(id.toUpperCase());
//   } else{
//     console.log(id);
//   }
//  }
// print("chitanshi" )
//generic class 
// class car<T>{
//     name:T
//     constructor(name:T){
//         this.name = name
//     }
//     greet(): T{
//        return this.name
//     }
// }
// //generic objects
// let obj = new car<string>("chitranshi")
// console.log(obj.greet());
//record || partial || readonly || required
// interface user{
//     name:string
//     age:number
// }
// type optimaluser = Partial<user>   //----optioanl bana deta hai
// type req = Required<user> ///mandortory bana deta hai
// type readonly = Readonly<user> //readonly bana deta hua acces nhi kar sakte
// type userr = Record< key ka type , value ka typr>
// interface user{
//     name:string
// }
// type rec = Record<string,user>
// let obj:rec = {
//    "abe":{
//     name:"chii"
//    }
// }
//pick omit excludes extract
// interface Iuser{
//     name:string
//     age:number
//     email:string
//     password:string
// }
// type login = Pick<Iuser, "email"> //pick from interface
// type antilogin  = Omit<Iuser,"email"> //opposite of pick
// type status = "Active" | "Inactive" | "dead"
// type A = Exclude<status, "Active"> //type se lete hai
// type B = Extract<status,"Active">
//promise future ka type bataaat , awaited bataata h ki yehi type aana chahiye
//(aa sakti hai) , ----------------------(yahi ayegi)
// function main(name:string,age:number){
//     return{
//         name:"ASSA",
//         age:344,
//         isActive:true
//     }
// }
// type returntype = ReturnType<typeof main>
// type param = Parameters<typeof main>
// async function main1(){
//     return {name:"hello"}  //prmise return karra hai
// }
// type p = ReturnType<typeof main1>  /promise kya ye return karega future mai
// type aw = Awaited<ReturnType<typeof main1>>  //prmise ka type dede
//assignment
// type acc = "admin" | "user" | "guest"
// interface user{
//     id:number
//     name:string
//     email?:string
//     role:acc
//     isActive:boolean
// }
// function createduser(User:user):string{
//  if(User.email == undefined){
//    return `email not present`
//  } else{
//     return `user creasted`
//  }
// }
// let obj:user = {
//     id:2,
//     name:"chitatrnshi",
//     role:"admin",
//     isActive:true
// }
// let ans = createduser(obj)
// console.log(ans);
// function getuserRoleMessage<T extends acc>(role:T):string{
// if(role === "admin"){
//     return `full access`
// }else if(role === "user"){
//     return `limited acces`
// }else{
//     return `read only`
// }
// }
// console.log(getuserRoleMessage("admin"))        
function swap(a, b) {
    return [b, a];
}
swap(2, 3);
//# sourceMappingURL=main.js.map