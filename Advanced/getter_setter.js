class User{
    constructor(email,passeord){
        this.email=email,
        this.passeord=passeord
    }

    get passeord(){
        return `${this._passeord}Ayan`
    }

    set passeord(value){
        this._passeord=value
    }
}

const ayan=new User("ayan.ai","123")
console.log(ayan.passeord)
