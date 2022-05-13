const Joke = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", Joke.findAll)
    app.post("/api/jokes", Joke.create)
    app.get("/api/jokes/:id", Joke.findOne)
    app.put("/api/jokes/:id", Joke.update)
    app.delete("/api/jokes/:id", Joke.delete)
}

