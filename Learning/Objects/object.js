let obj = {
    name: "Priyanshu",
    class: "Bca",
    sem: 4
}

console.log(obj.name);

obj.age = 21
obj.greet = function(){
    return `Welcome ${this.name}`;
}

console.log(obj.greet())

Object.freeze(obj) //now I can't make any changes

//lets try to make one change
obj.favLang = "Logic Building"

console.log(obj.favLang) //gives undefined
/*after the Object.freeze(obj), it neither gives me an error
nor modifies the object...works secretly wth
*/

let obj2 = {
    name: "ajax"
}

// let obj3 = Object.assign({}, obj, obj2)
let obj3 = {...obj, ...obj2}
console.log("obj3: ", obj3)

console.log(obj3.hasOwnProperty('name'))

//------------DESTRUCTURING----------->>>
// Noob
// let name = obj.name;
// console.log(name)

// Pro
// let {name} = obj
// console.log(name)
console.log("----------------------------------------")
let pr = {
    name: "priyanshu",
    test: "shi",
    age: 21
}


//little destructuring example
let {name, age} = pr
console.log(name, age)

let arr = [1, 2, 3]
let [pehla, teesra] = arr
console.log(pehla, teesra)