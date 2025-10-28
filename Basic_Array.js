const array = [10, 20, 30, 40, 50];
const array2=[1,2,3,4,5,6,7,8,-1,-2,-3,10,50]

//1. Print all items in an array, one per line
console.log("All items in the array:");
for (let item of array) {
    console.log(item);
}

//2. Print the length of an array
console.log("Length of array:", array.length);

//3. Set the third element to zero.
array[2]=0
console.log("New array after setting third element to zero:", array);

//4. Access and print the first and last elements
console.log("First element:",array[0])
console.log("Last element:",array[array.length-1])

//5. Print all elements except the first one
const newArray=array.slice(1,array.length)
console.log("All elements except the first one:",newArray)

//6. Print each element using a for loop.
for (let i=0; i<array.length;i++){
    console.log(array[i])
}

// //7. Add a value to the end of the array.
// array.push(100)
// console.log("Array after adding a value to the end:",array)

// //8. Remove the last element from the array.
// array.pop()
// console.log("Array after removing the last element:",array)

//9. Add an item at the start of an array
array.unshift(5)
console.log("Array after adding an item at the start:",array)

//10. Remove the first item from an array
array.shift()
console.log("Array after removing the first item:",array)

//11.Insert a value at a given index
array.splice(2,0,25)//Inserting 25 at index 2 why 0 means no element will be removed
console.log("Array after inserting a value at index 2:",array)

//12. Remove a value at a given index
array.splice(2,1)//Removing the value at index 2
console.log("Array after removing the value at index 2:",array)

//13. Print all elements at even indexes
console.log("Elements at even indexes:");
console.log("Print without logic:");
for (let i=0; i<array.length;i+=2){//Without logic
    console.log(array[i])
}
console.log("Print with logic:");
for (let j=0; j<array.length;j++){ // With logic
    if(j%2===0){
        console.log(array[j])
    }
}


//14. Print all elements greater than 5
console.log("Elements greater than 5:");
for (let i=0; i<array2.length; i++){
    if(array2[i]>5){
        console.log(array2[i])   
    }
}

//15. Find the index of a given element (e.g., 30)
const index=array2.indexOf(30)
console.log("Index of element 30 is:",index)

//16. Print a new array containing only positive numbers.
const positiveArray=array2.filter(num=>num>0)
console.log("Array containing only positive numbers:",positiveArray)

for(let i=0; i<array2.length;i++){
    if(array2[i]>0){
        console.log(array2[i])
    }
}

//17. Print the sum of all elements in the array.
let sum=0
for (let i=0; i<array2.length;i++){
    sum+=array2[i]
}
console.log("Sum of all elements in the array:",sum)

//18. Print the maximum value in the array.
let max=array2[0]
for(let i=0; i<array2.length;i++){
    if(array2[i]>max){
        max=array2[i]
    }
}
console.log("Maximum value in the array is:",max)

//19. Print the minimum value in the array. 
let min=array2[0]
for(let i=0; i<array2.length;i++){
    if(array2[i]<min){  
        min=array2[i]
    }
}
console.log("Minimum value in the array is:",min)

//20. Reverse the array and print it.
const reversedArray=array2.reverse()
console.log("Reversed array is:",reversedArray)