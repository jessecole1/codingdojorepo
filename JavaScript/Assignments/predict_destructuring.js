// Predict Destructuring
// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// ------ (1) -------
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// (My Prediction)
// console.log(randomCar) => ['Tesla', 'Mercedes', 'Honda']
// console.log(otherRandomCar) => Honda
// (Answers)
// console.log(randomCar) => Tesla
// console.log(otherRandomCar) => Mercedes

// =================================================================================================== 

// ------ (2) -------
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);

// (My Prediction)
// console.log(name) => Undefined
// console.log(otherName) => Elon
// (Answers)
// console.log(name) => ReferenceError: name is not defined
// console.log(otherName) => Elon

// =================================================================================================== 

// ------ (3) -------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// (My Prediction)
// console.log(password) => 12345
// console.log(hashPassword) => Undefined
// (Answers)
// console.log(password) => 12345
// console.log(hashPassword) => Undefined

// =================================================================================================== 

// ------ (4) -------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// (My Prediction)
// console.log(first == second) => False
// console.log(first == third) => True
// (Answers)
// console.log(first == second) => False
// console.log(first == third) => True

// =================================================================================================== 

// ------ (5) -------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// (My Prediction)
// console.log(key) => value
// console.log(secondKey) => [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]) => 1
// console.log(willThisWork) => Undefined
// (Answers)
// console.log(key) => value
// console.log(secondKey) => [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]) => 1
// console.log(willThisWork) => 5 (yes it does work)