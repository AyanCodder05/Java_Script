// let myName="Ayan    "
// console.log(myName.truelength)




let myHero=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"Sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ayan=function(){
    console.log("Ayan is present all object")
}


Array.prototype.heyAyan=function(){
    console.log("Ayan samai")
}

// heroPower.ayan()
myHero.ayan()
myHero.heyAyan()
//heroPower.heyAyan()

//Inheritance:
const teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailble:true,
    __proto__:teacher
}

Object.setPrototypeOf(TeachingSupport, teacher)

