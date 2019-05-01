var Search = require("./search");

var fs = require("fs");

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
    console.log("'concert-this' command accessed\n\nYou searched for: " + userQuery + "\n\nPlease stand by..." + divider + "Results:  \n\n");
    
    // utilize findEvent method from search.js
    // userQuery is the artist being searched
    // will search/read Bands-in-Town API w/ Axios
    search.findConcert(userQuery);
    break;
  
  // if user enters "spotify-this-song" command...
  case "spotify-this-song":
    
    //confirm their request
    console.log("'spotify-this-song' command accessed\n\nYou searched for: " + userQuery + divider + "\nPlease stand by..." + divider + "Results:  \n\n");
    
    // utilize findSong method from search.js
    // userQuery is the song being searched
    // will use Node Spotify API package
    search.findSong(userQuery);
    break;
      
  // if user enters "movie-this" command...
  case "movie-this":
  
    //confirm their request
    console.log("'movie-this' command accessed\n\nYou searched for: " + userQuery + divider + "\nPlease stand by..." + divider + "Results:  \n\n");
    
    // utilize findMovie method from search.js feeding
    // userQuery as the movieName parameter
    search.findMovie(userQuery);
    break;
    
  // if user enters "do-what-it-says" command...
  case "do-what-it-says":
  
    //confirm their request
    console.log("'do-what-it-says' command accessed" + divider + "\nPlease stand by..." + divider + "Results:  \n\n");

    runRandom();
    break;

  default:
    runBust(); // bust chops for not reading instructions
}

// This function reads random.txt and executes one of the above-referenced commands based on its contents
function runRandom() {
  
  fs.readFile('random.txt', 'utf8', function(error, data) {
    if (error) {
      return console.log(error);
    }
    
    console.log(data);
    var dataArr = data.split(',');
    var value = dataArr[1].replace(/\'/g,"");
    console.log(value);
    
    switch (dataArr[0]) {
      case 'spotify-this-song':
        search.findSong(value);
        break;
      case 'concert-this':
        search.findConcert(value);
        break;
      case 'movie-this':
        search.findMovie(value);
        break;
      default:
        console.log("There seems to be some issue with the source file, random.txt. Double check that it is formatted correctly.");
        break;
    }
  });
}
function runBust() {
  console.log("No command has been received. \nPerhaps you have a wet brain. \nYou might consider reading the instructions in README.md");
}
