// const promiseOne=new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async Tas2")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Async2 Resolved")
// })

// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Ayan", email:"ayan@gmail.com"})
//     },1000)
    
// })

// promiseThree.then((user)=>{
//         console.log(user)
//     })

// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({username:"Ayan",password:"123"})
//         }
//         else{
//             reject('Error something went wrong')
//         }
//     },1000)
// })



// const username=promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{console.log(username)}).catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log("Finally "))

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject('Error js went wrong')
        }
    },1000)

})

async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response)
}
consumePromiseFive()