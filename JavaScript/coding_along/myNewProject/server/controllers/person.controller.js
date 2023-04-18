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
        // console.log("------ Console.log() --------")
        // console.log(request.body)
        // console.log("------ Console.log() --------")
}

// PART III - Codeblock 1
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => {
            // console.log(persons);
            response.json(persons);
        })
        .catch(err => {
            // console.log(err);
            response.json(err);
        })
}

// PART IV - Codeblock 1
module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person=>response.json(person))
        .catch(err=>response.json(err));
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    // {new:true} indicates we want the returned document to contain the newly updated document instead of the default mongoose action of sending back the orginial document (prior to updating)
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => console.log(err));
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

// Now lets update our routes 