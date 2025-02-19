let child = {
    name: "child",
    age: 21,
}

// console.log(Object.getPrototypeOf(obj.name))
// console.log(Object.getPrototypeOf(obj))

let parent = {
    name: "parent",
    age: 50
}

//inheritance
child.prototype = parent

// console.log(child.__proto__)
// -------------------------------------------------------------->>

Object.prototype.customFun = ()=>{
    console.log("Custom Function Executed")
}

child.customFun()
parent.customFun()
