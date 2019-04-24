var Search = require("./search");

// Create a new Search object
var search = new Search();

var inputString = process.argv;

var command = inputString[2];

var userQuery = process.argv.slice(3).join(" ");

var divider = "\n---------------------------------------------------\n\n";

switch(command) {
  
  // if user enters "concert-this" command
  case "concert-this":
  
  //confirm their request
  console.log("'concert-this' command accessed\nuser query= " + userQuery + divider + "Please stand by" + divider);
  
  // create a new object, via the Search constructor, findEvent method in search.js with userQuery (user's artist-search).  This will access & read Bands-in-Town API w/ Axios
  search.findEvent(userQuery);
    break;
    
  case "spotify-this-song":
    runSong();
    break;
  case "movie-this":
    runMovie();
    break;
  case "do-what-it-says":
    runRandom();
    break;
  default:
    runPrompt(); // ask what they want to do
}



// if user enters "concert-this" command,
// access & read Bands-in-Town API w/ Axios


// if user enters "spotify-this-song" command,
// access & read node-spotify-api package
function runSong() {
  console.log("runSpotify command accessed\nuserQuery= " + userQuery + divider);
}

// if user enters "movie-this" command,
// access & read OMDB API w/ Axios
function runSong() {
  console.log("runOMBD command accessed\nuserQuery= " + userQuery + divider);
}

// if user enters "do-what-it-says" command,
// use fs node package to read random.txt and,
// based on its contents, call one of LIRIbot's commands
function runRandom() {
  console.log("runFS command accessed\nuserQuery= " + userQuery + divider);
}

// if user runs the app without a command, LIRIbot will
// correctly assume they are a bit slow and provide
// guidance by asking questions to clarify intent
function runPrompt() {
  console.log("This DEFAULT command is reserved for the criminally stupid. Perhaps you might consider reading the instructions?");
}