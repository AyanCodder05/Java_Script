//const tinderUser = new Object(); //Single termObject
const tinderUser = {}; //non-single termObject
tinderUser.id="123abc";
tinderUser.name="Ayan"
tinderUser.isLoggedIn=true;
//console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ayan",
            lastname:"Samai"


        }
    }

}

//console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};

//const obj3=Object.assign({},obj1, obj2);
const obj3={...obj1, ...obj2};
console.log(obj3);

//Database Givven values 
// How to get values from database
const user=[
    {
        id: 1,
        email:"as@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    }
]

user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));//Important
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));//Important