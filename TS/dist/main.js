"use strict";
//variable decleration
Object.defineProperty(exports, "__esModule", { value: true });
let name = "JS";
let isactive = true;
let int = 556;
let n = 898; //ye check nhi krta or not recommended
//let mm:never =  44    //infineteloop or error throw
//function decleration
const sum = (a, b) => {
    return a + b;
};
let ans = sum(2, 3);
//3.log(ans);
//union type
let song = true;
//regix repression
let reg = /\d/; //its type is object
//////////////////////arrays && tuples/////////////////////////////////////
let stringArr = ["one", "two", "three"];
let guiters = ["hello", 774];
let mixeddata = ["one", true, 32676732];
stringArr.push("abcd");
guiters = stringArr;
mixeddata.push(true);
mixeddata.push("string");
mixeddata.push(5467);
//array decleartion
let value = [];
value.push("A");
console.log(value);
console.log(value.includes('A'));
let myuname = "Chitranshi";
let myunamee = "Chitranshi";
console.log(myuname.startsWith("c"));
//tuple -- her index ka type dete hai
let namemee = ["ee", 3, true];
//ek array ke andar tuple daal sakte hai lekin tupe mai array nhi daal sakte maybe infuture kisis index ki value chage karo
let obj = {
    name: "TS"
};
let objjj = {};
let obbjjjj = []; //array bhi ek obj hai
let p = {
    name: "vhitargs",
    roolno: 33
};
console.log(p.name);
let userobh = {
    name: "chitrabshu",
    emaail: "634764hgefhg",
    rollno: 3443,
    phooneno: 78347483
};
function userrr(userobh) {
    if (!userobh.name) {
        return "pls give name";
    }
    else {
        return `hello ${userobh.name}`;
    }
}
console.log(userrr(userobh));
//# sourceMappingURL=main.js.map