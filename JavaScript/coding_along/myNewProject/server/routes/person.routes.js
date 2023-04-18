// Codeblock 2
const PersonController = require('../controllers/person.controller'); // Import the code from codeblock 1

module.exports = (app) => {
    app.get('/api', PersonController.index);
    
    // PART II - Codeblock 4
    app.post('/api/people', PersonController.createPerson);
    // By adding this line, we can now create people by sending 
    // a post request to 'localhost:8000/api/people'.

    // PART III - Codeblock 2
    app.get('/api/people', PersonController.getAllPeople);

    // PART IV - Codeblock 2
    app.get('/api/people/:id', PersonController.getPerson);

    app.put('/api/people/:id', PersonController.updatePerson);

    app.delete('/api/people/:id', PersonController.deletePerson);
}

// Next we need to head over to the server.js file and import the mongoose config file so it will 
// fire up the MongoDB server connection, and this file, so we can handle a post request to create 
// a person. 

//      - in order to handle post requests, we will have to add a couple app.use statements with 
//        some express middle-ware.