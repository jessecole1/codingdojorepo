// Push front
// function main (arr, num) {
//     let newArr = [];
//     newArr[0] = num;
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i+1] = arr[i];
//     }
//     return newArr;
// }

// console.log(main([1,2,3],8));

//---------------------------------------------------

// Pop front
// function main (arr) {
//     let newArr = [];
//     for (let i = 1; i < arr.length; i++) {
//         newArr[i-1] = arr[i];
//     }
//     console.log(newArr);
// }

// main([1,2,3,4,5]);

//---------------------------------------------------

// Insert at
// function main(arr, idx, num) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i === idx) {
//             newArr[i] = num;
//             newArr[i+1] = arr[i];
//         } else if (i > idx) {
//             newArr[i+1] = arr[i];
//         } else {
//             newArr[i] = arr[i];
//         }
//     }
//     return newArr;
// }

// console.log(main([100,200,5],1,25));

//---------------------------------------------------

// Remove at 

// function main(arr, idx) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i === idx) {
//             continue;
//         } else if (i < idx) {
//             newArr[i] = arr[i];
//         } else {
//             newArr[i-1] = arr[i];
//         }
//     }
//     return newArr;
// }

// console.log(main([1,50,100], 2));

//---------------------------------------------------

// Swap pairs 

// function main(arr) {
//     let newArr = [];
//     if (arr.length % 2 === 0) {
//         for (let i = 0; i < arr.length; i+=2) {
//             newArr[i] = arr[i+1];
//             newArr[i+1] = arr[i];
//         }
//         return newArr;
//     } else {
//         for (let i = 0; i < arr.length; i+=2) {
//             newArr[i] = arr[i+1];
//             newArr[i+1] = arr[i];
//             console.log("i: " + i);
//             if (i+3 === arr.length) {
//                 newArr[arr.length-1] = arr[arr.length-1];
//                 return newArr;
//             }
//             console.log("newArr: " + newArr);
//         }
//         return newArr;
//     }
// }

// console.log(main([1,2,3,4,5,6,7]));

//---------------------------------------------------

// Remove duplicates

// function main(arr) {
//     let dict = {};
//     for (let i = 0; i < arr.length; i++) {
//         dict[arr[i]] = 0;
//     }
//     let keys = Object.keys(dict);
//     let newArr = [];
//     for (let i = 0; i < keys.length; i++) {
//         newArr[i] = parseInt(keys[i]);
//     }
//     return newArr;
// }

// console.log(main([-1,-1,-1,2,3,4,5,5,5]));