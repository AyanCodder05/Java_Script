function sayMyname(name){
    console.log("My name is " + name);//Function Definition

}
//sayMyname("Ayan");//Function Invocation

// function addTwoNumbers(num1,num2){//num1,num2 are Parameters
//     console.log(num1 + num2);//Function Definition
// }

function addTwoNumbers(num1,num2){//num1,num2 are Parameters
    // let res=num1 + num2;//Function Definition
    // return res;
    return num1 + num2;
}
const result=addTwoNumbers(5,7);//Function Invocation
// addTwoNumbers(4,"4")
// addTwoNumbers(3," Hello")//3, " Hello" are Arguments

//console.log("The result is " + result);//undefined because function does not return anything


// function loginUserMessage(username){
//     // if(username===undefined){
//     //     console.log("Please enter a username")
//     //     return

//     // }

//     if(!username){
//         console.log("Please enter a username")
//         return

//     }

//     return `${username} just logged in`
// }

function loginUserMessage(username="Ayan"){
    // if(username===undefined){
    //     console.log("Please enter a username")
    //     return

    // }

    if(!username){
        console.log("Please enter a username")
        return

    }

    return `${username} just logged in`
}


//console.log(loginUserMessage("Ayan"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage())
