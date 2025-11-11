const user={
    username:"Ayan",
    price: 999,

    welcomeMessage:function(){
        //console.log(`${this.username},welcome website`)
        //console.log(this)
    }


}

// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();

//console.log(this)


// function myFunction(){
//     console.log(this)
// }

// function myFunction(){
//     const username="Ayan"
//     console.log(this.username)
// }

// myFunction();

// const myFunction=function(){
//     const username="Ayan"
//     console.log(this.username)
// }
// myFunction();


const myFunction=()=>{
    const username="Ayan"
    console.log(this.username)
}


//myFunction();

//Explicit return
// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

//Implicit return
// const addTwo=(num1, num2)=> num1+num2
// const addTwo=(num1, num2)=> (num1+num2)

//const addTwo=(num1, num2)=>{username:"Ayan"}
const addTwo=(num1, num2)=>({username:"Ayan"})

console.log(addTwo(5,6))




