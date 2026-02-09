//variable decleration

let name:string = "JS"
let isactive:boolean = true
let int:number = 556
let n:any = 898  //ye check nhi krta or not recommended
//let mm:never =  44    //infineteloop or error throw


//function decleration

const sum  = (a:number,b:number):number=>{
    return a+b
}
let ans = sum(2,3)
//3.log(ans);


//union type

let song:string | number | boolean = true  

//regix repression

let reg:RegExp = /\d/  //its type is object

//////////////////////arrays && tuples/////////////////////////////////////

let stringArr = ["one","two","three"]
let guiters = ["hello",774]
let mixeddata = ["one",true,32676732]

stringArr.push("abcd")

guiters = stringArr

mixeddata.push(true)
mixeddata.push("string")
mixeddata.push(5467)


//array decleartion

let value:string[] = []
 value.push("A")
 console.log(value);

 console.log(value.includes('A'));
 
 let myuname = "Chitranshi" as string
 let myunamee = <string>"Chitranshi"
 console.log(myuname.startsWith("c")
)

//tuple -- her index ka type dete hai
 
let namemee:[string , number , boolean] = ["ee",3,true]

//ek array ke andar tuple daal sakte hai lekin tupe mai array nhi daal sakte maybe infuture kisis index ki value chage karo

let obj = {
    name:"TS"

}

let objjj = {}
let obbjjjj = []  //array bhi ek obj hai

//object ka tye dene ke liye
interface Iuser{
  name:string,
  roolno:number
}  
type Iuser1 = {

}

let p:Iuser = {
    name:"vhitargs",
    roolno:33
}
console.log(p.name);

interface user{
    name?:string,
    emaail:string,
    rollno:number,
    phooneno:number,
    isactive?:boolean
}

let userobh:user = {
    name:"chitrabshu",
    emaail:"634764hgefhg",
    rollno:3443,
    phooneno:78347483

}
function userrr(userobh:user){
    if(!userobh.name){
      return "pls give name"
    }else{
        return `hello ${userobh.name}`

    }

}
console.log(userrr(userobh));


function ErrorMessage(){ //iska type never hai 
    throw new  Error("someen")
}


 