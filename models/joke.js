const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [10, "{PATH} must be 10 chars long"]
    },
    punchline:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [5, "{PATH} must be 5 chars long"]
    }
}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema)
module.exports = Joke;