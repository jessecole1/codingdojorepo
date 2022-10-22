function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("I'm Hungry")
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);

//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<10; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(i=0; i<result.length; i++) {
        sum = sum + result[i];
    }
    var count = 0
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
