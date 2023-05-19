// Remove blanks 

// function main(string) {
//     let newString = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== " ") {
//             newString += string[i];
//         }
//     }
//     return newString;
// }

// console.log(main("Welcome to coding dojo"));

// -----------------------------------------------------------
// Get Digits 

// function main(string) {
//     let newString = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
//             newString += string[i];
//         }
//     }
//     return newString;
// }

// console.log(main("He01llo W23o4rld5"));

// -----------------------------------------------------------
// Acronyms

// function main(string) {
//     let newString = "";
//     const words = string.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         newString += words[i].charAt(0).toUpperCase();
//     }
//     return newString;
// }

// console.log(main("Live from New York, it's Saturday Night!"));

// -----------------------------------------------------------
// Count non-spaces

// function main(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== " ") {
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(main("Hello world !"));

// -----------------------------------------------------------
// Remove shorter strings 

// function main(arr, num) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length >= num) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(main(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));