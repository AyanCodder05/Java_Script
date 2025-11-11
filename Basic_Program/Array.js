//Array:
//const myArr=[0,1,2,3,4,5];

////Array Methods:
// myArr.push(6); //Adds an element to the end of the array
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
// myArr.pop (); //Removes the last element from the array
// console.log(myArr)
// myArr.unshift(9); //Adds an element to the beginning of the array
// console.log(myArr);
// myArr.shift(); //Removes the first element from the array

// console.log(myArr.includes(3)); //Checks if an element is present in the array
// console.log(myArr.indexOf(3)); //Returns the index of the first occurrence of an element in the array
// myArr.splice(2, 1); //Removes elements from the array (start index, number of elements to remove)


// console.log(myArr);

// //Slice, Splice
// const newArr=myArr.slice(1,4); //Creates a new array by extracting a portion of the original array (start index, end index)
// console.log("Slice:",newArr); 

// const newArr2=myArr.splice(1,4);
// console.log(myArr);
// console.log("Splice",newArr2); 
// //What is the difference between Slice and Splice?
// //Slice does not modify the original array, Splice modifies the original array.

const marvel_heroes=['Ironman','Spiderman','Hulk','Thor'];
const dc_heroes=['Batman','Superman','Flash'];
//marvel_heroes.push(dc_heroes); //Merging two arrays using spread operator
// console.log(marvel_heroes);
// console.log(marvel_heroes[4]);

//marvel_heroes.push(...dc_heroes); //Merging two arrays using spread operator
//console.log(marvel_heroes);

//Merging two arrays using concat method
const allHeros=marvel_heroes.concat(dc_heroes); 

//Using Spread Operator
const all_new_Heros=[...marvel_heroes,...dc_heroes]; //Merging two arrays using spread operator
//console.log(all_new_Heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity); //Flattening an array
//console.log(real_another_array);


console.log(Array.isArray("Ayan")); //Checking if a variable is an array
console.log(Array.from("Ayan")); //Creating an array from a string
console.log(Array.from({name:"Ayan"})); //Creating an array from an object
console.log(Array.of(1,2,3,4,5)); //Creating an array from a list of elements