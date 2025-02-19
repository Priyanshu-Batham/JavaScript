// only methods, constructor, properties, accessors are allowed
class User{
    // properties don't have let, const; those are called variables
    user = ""
    
    constructor(user){
        this.user = user
    }

    // methods don't have "function" keyword
    getUser(){
        return this.user;
    }
}

let user1 = new User("Priyanshu")
console.log(user1.getUser())