// PART II - Codeblock 3
const Person = require('../models/person.model');


// Codeblock 1
module.exports.index = (request, response) => { // We are exporting a key:value pair of index:function
    response.json({
        message:"Hello world"
    });
    console.log("hey")
}

// PART II - Codeblock 3
module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
        console.log("------ Console.log() --------")
        console.log(request.body)
        console.log("------ Console.log() --------")
}

// Now lets update our routes 