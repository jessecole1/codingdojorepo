// PART II - Codeblock 1

// Configuring our connection to our MongoDB database
// The database will be called person

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/person', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


// Now, we will create a CRM - Customer Relationship Management by making a new model called "Person"
// Over in models/person.model.js