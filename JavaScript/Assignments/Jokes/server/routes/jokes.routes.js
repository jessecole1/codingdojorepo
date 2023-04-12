const JokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.put('/api/jokes/update/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}