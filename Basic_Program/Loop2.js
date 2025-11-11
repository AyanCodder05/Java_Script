// //const coding=['JavaScript','Python','C++','Ruby','Java'];
// // const value=coding.forEach((item)=>{
// //     //console.log(item);
// //     //return item;
// // })
// // console.log(value); 



// const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// // const newNums=myNumbers.filter((num)=> num>4)
// // const newNums=myNumbers.filter((num)=> {
// //     return num>4
// // })

// // const newNums=[]
// // myNumbers.forEach((num)=>{
// //     if(num>4){
// //         newNums.push(num)
// //     }
// // })
// // console.log(newNums);  

// const books=[
//     {title:'Book One', author:'Author One', rating:4.5},
//     {title:'Book Two', author:'Author Two', rating:3.8},
//     {title:'Book Three', author:'Author Three', rating:4.2},
//     {title:'Book Four', author:'Author Four', rating:4.9},
//     {title:'Book Five', author:'Author Five', rating:2.9},
    
// ];

// const uerBooks= books.filter((bk)=>bk.rating>4.0)
// console.log(uerBooks);

// const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// const newNum = myNumbers.map((num)=>num+10).map((num)=>num*2).filter((num)=>num>25)
// // const newNum=myNumbers.map((num)=>num+10)
// console.log(newNum);


//Reduce Method
const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currvall){
//     console.log(`Accumulator:${acc} , Current Value:${currvall}`);
//     return acc+currvall
// }, 0);
//const myTotal=myNums.reduce((acc,curr)=> acc+curr,0);
// console.log(myTotal);

const shoppingCart=[
    {item:'Book', price:200},
    {item:'Laptop', price:30000},
    {item:'Mobile', price:15000},
]
const cartTotal=shoppingCart.reduce((acc, item)=>{return acc+item.price},0)
console.log(cartTotal)







