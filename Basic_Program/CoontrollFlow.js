//If Statement:
const isUserLoggedIn = true;
// if(2=="2") {
//     console.log("Executed")
// }


if(2==="2") {//Strict Equality Operator- checks value and type
    console.log("Executed")
}

const balance = 1000;
//if (balance>500) console.log("You have sufficient balance");


const userLoggedIn=true;
const debitCard=true;

if(userLoggedIn && debitCard) {
    console.log("You can make the purchase")
}


//Truthy and Falsy Values in JS
// Falsy Values: false, 0, "", null, undefined, NaN,-0,BigInt,0n
// Truthy Values: true, non-zero numbers, non-empty strings, objects, arrays,"0", "false",' ',function(){}, [],{}.

// const arr=[]
// if(arr.length===0) {
//     console.log("Array is empty")
// }


const emptyObj={}
if(Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
}


//Nullish Coalescing Operator(??): null or undefined
let val1;
// val1=5?? 10
//val1=null ?? 10
//val1= undefined ?? 10
console.log(val1) 

//Ternary Operator
//condition ? expr1 : expr2

const age=17;
const canVote= age>=18 ? "You can Vote" : "You cannot Vote";
console.log(canVote)


