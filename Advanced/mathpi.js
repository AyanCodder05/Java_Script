const descripter=Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

// Object.create(null)

const chai={
    name:'ginger chai',
    price:250,
    isAvailbale: true,
    orderChai:function(){
        console.log("Chai nahi bni")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))


// for(let [key,value] of chai){
//     console.log(`${key}:${value}`)
// }

for(let [key,value] of Object.entries(chai)){
    if (typeof value !=='function') {
        console.log(`${key}:${value}`)
    }
    
}