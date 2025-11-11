// const balance= new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed())//using for decimal places (ecommerce website)
// console.log(balance.toLocaleString('en-IN'))//using for locale format

// const otherBalance= 123456.789
// //console.log(otherBalance.toLocaleString('de-DE'))//german format
// //console.log(otherBalance.toLocaleString('ar-EG'))//egyptian format
// console.log(otherBalance.toPrecision(4))//total number of digits

// const hundred= 1000000

// console.log(hundred.toLocaleString('en-IN'))
// Number
// console.log(Number.MAX_VALUE)


////**Math object**
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.SQRT2)

// console.log(Math.abs(-100))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(2,34,5,6,7,8,-1))
// console.log(Math.max(2,34,5,6,7,8,-1))
// console.log(Math.pow(2,3))  
console.log(Math.random())  //0 to 1
console.log(Math.floor(Math.random()*10)) //0 to 9
console.log(Math.floor(Math.random()*10)+1) //1 to 10


const min=10
const max=20
Math.random()*(max-min+1) + min