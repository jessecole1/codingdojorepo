// Houses logic for creating, reading, updating and deleting information. 

const User = require('../models/user.models');
// We dont have the 'const mongoose = require('mongoose')', instead this because we are importing the User variable from the user.model.js file.

// In the controller file, we export different functions that will perform CRUD operations. 


// User is a constructor function which can create new objects and also has other methods that can talk to the database
// .then() will only execute when successfully inserting data into the database
// .catch() will execute if there is an error

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUsers) => {
            res.json({users: allDaUsers})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}

module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id})
        .then(oneSingleUser => {
            res.json({user: oneSingleUser})
        })
        .catch((err) => {
            res.json({message:'Something went wrong', error: err})
        });

}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            res.json({user: newlyCreatedUser})
        }) 
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        {id: req.params.id},
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedUser => {
            res.json({user: updatedUser})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.deleteExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message:"Something went wrong", error: err})
        });
}

