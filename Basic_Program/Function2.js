// function calculateCartPrice(...num1){//Spread operator to accept multiple arguments
//     return num1
// }
function calculateCartPrice(val1, val2,...num1){//Rest operator to accept multiple arguments
    return num1
}
console.log(calculateCartPrice(10,20,30,40,50)); // [10, 20, 30, 40, 50]


const user={
    userName:"Ayan",
    age:24

}
function handleObject(anyobject){
    console.log(`User Name is ${anyobject.userName} and Price is ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    userName:"Ayan",
    price:399
});

const arr=[10,20,30,40,50];

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(arr));
console.log(returnSecondValue([100,200,300,400,500]));

