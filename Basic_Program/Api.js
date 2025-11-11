//Object Destructuring
const course={
    courseName:"React JS",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor

const{courseInstructor: instructor}=course;
console.log(instructor);

// const navbar=({company})=>{}//Function Destructuring
// navbar(company="Hitesh");

//json
// {
//  "name":"Ayan",
//  "courseName":"js",
//  "price":"free"
// }

[
    {},
    {},
    {}
]