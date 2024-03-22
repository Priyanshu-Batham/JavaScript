let man = new String("Priyanshu");
let age = 21

console.log(`Hello my name is ${man} and I am ${age} years old`);

//string methods
console.table([
    man.length,
    man.charAt(3),
    man.indexOf('as'),
    man.slice(3),
    man.concat(" Batham"),
    man.replace("Priy", "Him"),
    man.split("y"),
    man.toUpperCase(),
    man.toLowerCase(),
    man.endsWith("u"),
    man.includes("sh"),
    man.startsWith("A"),
    man.localeCompare("Priyanshz"),
    man.substring(1, 5)
])