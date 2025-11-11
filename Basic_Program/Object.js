//Singleton: 

//Object.create

const mysymb=Symbol("my symbol")
//Object  literals
const jsUser={
    "Name":"Ayan",
    "age":30,
    mysymb:"myvalue",
    [mysymb]:"my symbol value",
    "location":"West Bengal",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

// console.log(jsUser.Name)
// console.log(jsUser["age"])
// // 
jsUser.age=31
//Object.freeze(jsUser)
jsUser.age=32 //will not work
//console.log(jsUser)

//console.log(jsUser[mysymb])

jsUser.greeting=function(){
    console.log(`Hello JS User, ${this.Name}`)
}

console.log(jsUser.greeting())

 