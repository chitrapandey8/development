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
//type assertion--more specific type ke liye
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
// const ca =  new coder1("A", "B",["A","B"])
// ca.dataa()
///abstractclass --we use abstract in place of interface
class car {
    start() {
        console.log("engine start");
    }
    stop() {
        console.log("engine stop");
    }
}
class bmw extends car {
    engine() {
        console.log("v1");
    }
}
const carrr = new bmw();
carrr.engine();
//# sourceMappingURL=main.js.map