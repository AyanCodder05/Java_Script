

// if(true){
//     let a=10
//     const b=20
//     var c=30
// }

// // console.log(a)
// // console.log(b)
// console.log(c)


//Nested Scope
function one(){
    const name='Ayan'
    function two(){
        const website="www.xyz.com"
        //console.log(name)
    }
    //console.log(website)
    //two()
}

//one()
if(true){
    const username='Ayan'
    if(username==='Ayan'){
        const website='www.abc.com'
        //console.log(username + ' ' + website)
        
    }
    //console.log(website)

}

//console.log(username)

//Interview
// function addone(num){
//     return num+1
// }
// addone(5)

console.log(addone(5))

function addone(num){
    return num+1
}


// const addTwo= function(num){
//     return num+2
// }
// addTwo(5)

//Hosting
addTwo(5)
const addTwo= function(num){
    return num+2
}







