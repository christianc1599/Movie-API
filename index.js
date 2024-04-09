const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to my MyFlix App");
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Uh oh! Something went wrong!");
});
