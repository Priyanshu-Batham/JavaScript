let arr = [1, "priyanshu", true]
let arr2 = ["hello", false, 32]

//length
console.log("length", arr.length)

//push()
arr.push("Batham")
console.log("after pushing", arr)

// pop()
console.log("popped element: ", arr.pop())
console.log("array after pop(): ", arr)

// concat() return a new array
arr = arr.concat(arr)
console.log("concated array: ", arr)

// join() joins all the elements of an array into a string
console.log("joined string array: ", arr.join("-"))

//includes()
console.log("arr includes 'priyanshu'?", arr.includes("priyanshu"))

// indexOf()
console.log("index of priyanshu: ", arr.indexOf("priyanshu"))

// reverse()
console.log("reversed arr: ", arr.reverse())

//sorted arr when no comparator is specified, ASCII based comparator is used
console.log("reversed arr: ", arr.sort())

// slice() method copies the specified range from original array and returns it
//excluded end index
console.log("slice: ", arr.slice(1, 4))

//splice() method cuts the specified range from original array and returns it
//included end index
arr.splice(1, 4)
console.log("spliced part: ", arr)

// shift() removes first element ...pop_front()
console.log("shift element: ", arr.shift())
console.log("arr after shift(): ", arr)


// unshift() adds element to first place...push_front()
arr.unshift("first")
console.log(arr)

//flat() converts nD array to 1D array
let multi = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10, 11]]]]
console.log("Flat array: ", multi.flat(Infinity))

//destructuring an array
let myArr = [1, 2, 3]
let [one, two] = myArr
console.table([one, two])