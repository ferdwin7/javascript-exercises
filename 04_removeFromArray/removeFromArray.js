const removeFromArray = function(...args) {
    const array = args[0];
    const secondArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            secondArray.push(item);
        }
    })
    return secondArray;
};

// const array = args[0];
// console.log(array);
// const secondArray = [];
// array.forEach(myFunction(item)); 
// why does this produce errorrrrrrrrrrrrr, fkkkkkkkk, and why does putting () produce error but no () has no error. This is BULLSHIT!

// function myFunction(item) {
//     if (!args.includes(item)) {
//         secondArray.push(item);
//     }
// }
// return secondArray;

// Do not edit below this line
module.exports = removeFromArray;