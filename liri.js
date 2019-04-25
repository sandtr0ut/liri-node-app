var Search = require("./search");

// Create a new Search object
var search = new Search();

var inputString = process.argv;

var command = inputString[2];

var userQuery = process.argv.slice(3).join(" ");

var divider = "\n---------------------------------------------------\n\n";

switch(command) {
  
  // if user enters "concert-this" command...
  case "concert-this":
  
    //confirm their request
    console.log("'concert-this' command accessed\nuser query= " + userQuery + "\nPlease stand by" + divider + "Results:  ");
    
    // utilize findEvent method from search.js
    // userQuery is the artist being searched
    // will search/read Bands-in-Town API w/ Axios
    search.findEvent(userQuery);
    break;
  
  // if user enters "spotify-this-song" command...
  case "spotify-this-song":
    
    //confirm their request
    console.log("'spotify-this-song' command accessed\nuserQuery= " + userQuery + divider + "\nPlease stand by" + divider + "Results:  ");
    
    // utilize findEvent method from search.js
    // userQuery is the artist being searched
    // will search/read Bands-in-Town API w/ Axios
    search.findSong(userQuery);
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

// if user enters "movie-this" command,
// access & read OMDB API w/ Axios
function runMovie() {
  console.log("runOMBD command accessed\nuserQuery= " + userQuery + divider);
}

// if user enters "do-what-it-says" command,
// use fs node package to read random.txt and,
// based on its contents, call one of LIRIbot's commands
function runRandom() {
  console.log("runFS command accessed\nfunctionality= TBD " + divider);
}

// if user runs the app without a command, LIRIbot will
// correctly assume they are a bit slow and provide
// guidance by asking questions to clarify intent
function runPrompt() {
  console.log("This DEFAULT command is reserved for the criminally stupid. Perhaps you might consider reading the instructions?");
}