//1. Write a function that takes an array of numbers and returns both the total and the average

const arr=[1,2,3,5,4,6]
sum=0
//console.log(arr.length)
let avg;
// arr.forEach((num)=>{
//    sum+=num
//    const avg=sum/arr.length
    
// })
// console.log("Average: ", avg)


const value= arr.map((num)=>{
    sum+=num
    //console.log(sum)
    avg=sum/arr.length
    return avg

})

// console.log(value)
// console.log("Average: ",avg)

// 2. Double Each Number (map) Given [1, 2, 3, 4], return [2, 4, 6, 8].
const num=[1,2,3,4]
const returnValue=num.map((n)=>n*2)
//console.log("Return Value:", returnValue)


//3. Filter Even Numbers (filter) Filter out all odd numbers from an array of integers.
const number=[1,2,3,4,5,6,24,57,80,200,24,244,256,2464748,244440,244454421,464362836484640,4643628364846424,464362836484641,46436283648464,4643628364846436]


// function news(n){
//     return Math.random()*n
     
// }
// const array=[]
// array.push(news(1000))
// console.log(array)


const array = [];
for (let i = 1; i < 1000; i++) {
    //array.push(Math.random() * 100);
    array.push(Math.floor(Math.random() * 1000));

}
//console.log("Array: ",array);


const even=array.filter((n)=>n%2===0)
//console.log(even+" ")



//4. Capitalize Names (map) Convert an array of names like ["john", "amy", "bob"] → ["John", "Amy", "Bob"].

const name =["ayan","john","bob"];
const Name=name.map((n)=>n[0].toUpperCase()+n.slice(1))
//console.log(Name)


//5. Extract User Emails (map) From this array:
// const users = [{name:"Ayan",email:"a@gmail.com"},
// {name:"Sam",email:"s@gmail.com"}]
// Extract only the email list.

const users = [{name:"Ayan",email:"a@gmail.com"},
    {name:"Sam",email:"s@gmail.com"}]
const email=users.map((n)=>n.email)
//console.log(email)


//6. Filter Active Users (filter) Given:
// const users = [{name:"A",active:true}, {name:"B",active:false}]
// Return only active users.

const Users = [{name:"A",active:true}, {name:"B",active:false}]
const Act=Users.filter((n)=>n.active)
console.log(Act)










