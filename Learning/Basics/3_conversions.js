let str = "33"
let str1 = "33a"
let n = NaN
let undef = undefined
let nullVar = null
let bool = true
let singleQuoteString = 'hello' //means in js we can use '' and "" for string ✅

//converting to Number
console.table([typeof Number(str), typeof Number(str1), 
    typeof Number(n), typeof Number(undef), 
    typeof Number(nullVar), typeof Number(bool)]);

console.table([Number(str), Number(str1), 
    Number(n), Number(undef), 
    Number(nullVar), Number(bool)]);


//converting to Boolean
console.log([Boolean(str), Boolean(str1), 
    Boolean(n), Boolean(undef), 
    Boolean(nullVar), Boolean(bool)])

//converting to String
console.log([String(str), String(str1), 
    String(n), String(undef), 
    String(nullVar), String(bool)])
