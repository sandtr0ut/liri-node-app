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
    
    // utilize findMovie method from search.js
    // userQuery is the movie being searched
    // will search/read OMDB API w/ Axios
    search.findMovie(userQuery);
    break;
    
  // if user enters "do-what-it-says" command...
  case "do-what-it-says":
  
    //confirm their request
    console.log("'do-what-it-says' command accessed" + divider + "\nPlease stand by..." + divider + "Results:  \n\n");
        
    // read random.txt w/ fs node pkg and run one of the commands listed above based on its contents
    runRandom();
    break;

  default:
    runPrompt(); // ask what they want to do
}

function runRandom() {
  
  // try {
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
    // var dataArr = data.split(',');
    // dataArr.replace(/\"/gi,"");
    
    // var command = dataArr[0];
    // var value = dataArr[1];
    
    
    // console.log(dataArr);
    // console.log(command);
    // console.log(value);
    
    // var stringData = String(data);
    // stringData = stringData.substring(0, stringData.length-1);
    // console.log(stringData);
  
  
  
  // var dataArr = randomData.split(",");
  // var command = randomData[0].toString();
  // var userQuery = randomData[1].toString();
  
//   if (command = "concert-this") {
//     search.findConcert(value);
//   }else if (command = "spotify-this-song") {
//     search.findSong(value); 
//   // }else if (command = "movie-this") {
//   //   search.findMovie(value);
//   }else {
//     console.log("There seems to be some issue with the source file, random.txt. Double check that it is formatted correctly.");
  // }
//  }catch(e) {
//    console.log('Error:', e.stack);
//  } 
// }
// if user runs the app without a command, LIRIbot will
// correctly assume they are a bit slow and provide
// guidance by asking questions to clarify intent
function runPrompt() {
  console.log("This DEFAULT command is reserved for the criminally stupid. Perhaps you might consider reading the instructions?");
}
