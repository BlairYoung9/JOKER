const Joke = require("../models/joke")

module.exports = {

    //READ ALL
    findAll: (req,res) => {
        Joke.find()
            .then(allJokes => res.json({jokes: allJokes}))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //CREATE
    create: (req,res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //READ ONE
    findOne: (req,res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //UPDATE
    update: (req,res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then((updatedJoke) => {
                res.json(updatedJoke)
            })
            .catch(err => res.json({message: "error res", error : err}))
    },

    //DELETE
    delete: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: "error res", error : err}))
    }

}