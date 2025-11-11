// //For loops
// for (let index = 0; index < 10; index++) {
//     const element = index;
    
// }
// //While loops
// let count = 0;
// while (count < 10) {
//     count++;    
// }
// //Do while loops
// let number = 0;
// do {
//     number++;
// } while (number < 10);



//for of loops
const array = [1, 2, 3, 4, 5];
for (const i of array) {
   // console.log(i);
}

const greeting = "Hello World";
for(const char of greeting){
    //console.log(char);
}

//Maps
// const map = new Map();
// map.set('in', 'India');
// map.set('us', 'United States');
// map.set('fr', 'France');

//console.log(map);

// for (const [key,value] of map) {
    //console.log(key,':',value);
// }


// const myObject = {
//     game1:'Chess',
//     game2:'Football',
//     game3:'Tennis'
// }
// for (const [key, value] of myObject) {
//     console.log(key,':',value);
// }



const myObject ={
    js:'JavaScript',
    cpp:'C++',
    py:'Python',
    rb:'Ruby'

}

//For in loop
for (const key in myObject) {
    //console.log(key);
    //console.log(key,'-',myObject[key]);
    
}

const arr = [10,20,30,40,50];
for (const index in arr) {
    //console.log(index)
    //console.log(arr[index])
}



// const map = new Map();
// map.set('in', 'India');
// map.set('us', 'United States');
// map.set('fr', 'France');
// for (const key in map) {
//     console.log(key);   
// }

const coding=['JavaScript','Python','C++','Ruby','Java'];
// coding.forEach( function(item){
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// })


// function printme(val){
//     console.log(val);
// }

// coding.forEach(printme)


// coding.forEach( (val, index,arr)=>{
//     console.log(index,'-',val, arr);
// }
// )

const myCoding=[
    {
        languagename:'JavaScript',
        fileName:"js"
    },

    {
        languagename:'Java',
        fileName:"java"
    },
    {
        languagename:'Python',
        fileName:"py"
    }
]

myCoding.forEach((val)=>{
    console.log(val.languagename,'-',val.fileName);
})





