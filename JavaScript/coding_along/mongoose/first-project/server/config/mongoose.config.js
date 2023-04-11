const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true

    // The useNewUrlParser and useUnifiedTopology are options we pass to get rid of the deprecation methods 
    // in our terminal.
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));

// If you connec to a database that doesn't exist, mongodb will create one as soon as you create your first document

