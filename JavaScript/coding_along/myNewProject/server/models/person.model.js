// PART II - Codeblock 2

const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String},
}, {timestamps: true});
module.exports = mongoose.model('Person', PersonSchema);

// Now in the controller, we will handle the creation of a person