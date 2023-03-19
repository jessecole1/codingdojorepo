
// Question from lecture
// Are these functions efficient?

const squareTen = () => {
    return 10*10;
}

const squareNine = () => {
    return 9*9;
}

const squareFive = () => {
    return 5*5;
}

// Answer 
// No they aren't 


// Example of good use of a function
const squareNums = (num) => {
    return num*num;
}


const multiplyArrayBy2 = (arr) => {
    let output = []
    for (let i = 0; i<arr.length; i++) {
        output.push(arr[i] * 2);
    }
    return output
}
let result = multiplyArrayBy2([2,4,6]);
console.log(result);


const multiplyArrayBy3 = (arr) => {
    let output = []
    for (let i = 0; i<arr.length; i++) {
        output.push(arr[i] * 3);
    }
    return output
}
let result2 = multiplyArrayBy3([2,4,6]);
console.log(result2);


const divideArrayBy2 = (arr) => {
    let output = []
    for (let i = 0; i<arr.length; i++) {
        output.push(arr[i] / 2);
    }
    return output
}
let result3 = divideArrayBy2([2,4,6]);
console.log(result3);







const manipulateArray = (arr, instructions) => {
    // above, instructions would be another function (callback function)
    // use one of the functions below to be passed into instructions
    let output = [];
    for (let i = 0; i<arr.length; i++) {
        output.push(instructions(arr[i]));
    }
    return output;
}


const mulitplyElementBy2 = (val) => {
    return val*2;
}

// Calling manipulateArray
const result4 = manipulateArray([2,4,6], mulitplyElementBy2);
console.log(result4);