// Reponsible for routes dealing with the User model. 

// We are importing everything from the controller file.
const UserController = require('../controllers/user.controller');


module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users', UserController.deleteAnExistingUser);
}

// NOTE: The order of the routes matter.
// - If you have a route with a wildcare (like :id) before a path with a specific name, the wildcard route will always run. Move specific routes to the top to ensure they are followed. 

// For example:
// If you wanted to create a specific path, it would have to go before your get route to a single document. The following would never make it to the allUsers path because the :id route would match the string allUsers: 

// const UserController = require('../controllers/user.controller');
 
// module.exports = app => {
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.get('/api/users/allusers', UserController.findAllUsers);
// }
