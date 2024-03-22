let date = new Date();

console.table([
    date.getTime(),
    date.getMilliseconds(),
    date.getSeconds(),
    date.getMinutes(),
    date.getHours(),
    date.getDay(),
    date.getMonth(),
    date.getFullYear(),

    // Also all set() methods like get()
    //that am not writing

    //conversion methods
    date.toDateString(),
    date.toISOString(),
    date.toLocaleDateString(),
    date.toJSON(),
    date.toString(),
])