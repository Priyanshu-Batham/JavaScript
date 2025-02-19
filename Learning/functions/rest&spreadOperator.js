function f(...args){
    for(i = 0; i<args.length; i++){
        console.log(args[i])
    }
}

f("hello", 1, 2, 4, true, "Priyanshu", Symbol("oh"))
// ----------------------------------------------------
function combineArr(arr1, arr2){
    return [...arr1, ...arr2]
}
function combineArr(obj1, obj2){
    return {...obj1, ...obj2}
}

console.log(combineArr([1,2,3], [4,5,6]))


let print = function(val){
    console.log(val)
}
print("gta5")
