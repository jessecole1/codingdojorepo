const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema);
// A model object is created with 'User' as the name and the mongoose schema UserSchema
// This model will be used to enable crud functionality

// The mongoose.modle() method takes a blueprint object and, in tur, creates the necessary database collection out of the model
// We get this blueprint by making a new schema instance from the mongoose.Schema() object constructor. 
//      - notice how the mongoose.Schema() takes in an object as its parameter?
//      - the structure of that object is how each new document put into the collection will be formatted

module.exports = User;
// Exporting the user allows us to import it in any file we may need.

// NOTE: After we create our first document using this model, we will find a lowercase plural version of the collection name in our database. In this case, "users".