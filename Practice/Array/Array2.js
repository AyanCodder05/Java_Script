//1. Double each number - Use forEach to double every number in an array
const arr=[1,2,3,4,5,6]
arr.forEach((n)=>{
    num=n*2
    //console.log(num)
})
//console.log(double);

//2. Convert to uppercase - Use forEach to convert all strings in an array to uppercase
const name=["Ayan","durjay"]
name.forEach((name)=>
{
   // console.log(name.toUpperCase())
})


//3. Count even numbers - Use forEach to count how many even numbers are in an array
arr.forEach((num)=>{
    if (num%2===0) {
        //console.log(num)
    }
})

//4. Create new array - Use forEach to create a new array with modified elements
const newArray=[]
arr.forEach((num)=>{
newArray.push(num*2+1)

})
//console.log(newArray)





//5. Sum all numbers - Use forEach to calculate the sum of all numbers in an array
sum=0
newArray.forEach((num)=>{
    sum+=num

})
console.log(sum)




