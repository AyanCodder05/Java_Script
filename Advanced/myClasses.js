//Es6

class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const name=new User("Ayan","xyz@gmail.com","123")
console.log(name.encryptPassword())

//behind the scence:
