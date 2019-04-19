// read and set any environment variables with the dotenv package
require("dotenv").config();

// import and store keys.js file
var keys = require("./keys.js");

// access keys information
var spotify = new spotify(keys.spotify);
