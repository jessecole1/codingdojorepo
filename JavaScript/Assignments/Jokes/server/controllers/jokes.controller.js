const Joke = require('../models/jokes.model');

const findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error:err})
        });
}

const createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({joke: newlyCreatedJoke})
        })
        .catch((err) => {
            res.json({message:"Something went wrong", error: err})
        });
}

const getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({joke: oneSingleJoke})
        })
        .catch((err) => {
            res.json({message:"Something went wrong", error: err})
        });
}

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {id: req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedUser => {
            res.json({user: updatedUser})
        })
        .catch((err) => {
            res.json({message:"Something went wrong", error:err})
        });
}

const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result:result})
        })
        .catch((err) => {
            res.json({message:"Something went wrong", error:err})
        });
}

module.exports = {
    findAllJokes,
    createJoke,
    getOneJoke,
    updateJoke,
    deleteJoke
}