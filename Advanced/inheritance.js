class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username is ${this.username}`)
    }
}

// // class Teacher extends User{
//     constructor(username,email, password){
//         super(username)
//         this.email=email
//         this.password=password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`)
//     }
// }

// const name=new Teacher("Ayan","ayan@gmail.com","123")
// name.addCourse()

// console.log(name instanceof User)

//Static Prop
class user{
    constructor(userName){
        this.userName=userName
    }

    logme(){
        console.log(`Username: ${this.userName}`)
    }

    static createId(){
        return `123`
    }
}

class Teacher extends user{
    constructor(usernaame, email){
        super(usernaame)
        this.email=email
    }
}

const nam=new Teacher("as","as@gmail.com")
console.log(nam)