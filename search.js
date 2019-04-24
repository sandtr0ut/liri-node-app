require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var Search = function() {
  var divider = "\n---------------------------------------------------\n\n";
  
  this.findEvent = function(event) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    axios.get(URL).then(function(response) {
      
      var jsonData = response.data;
      
      var eventData = [
        "Venue:  " + jsonData.venue,
        "City:  " + jsonData.location,
        "Date:  " + jsonData.datetime
      ].join("\n\n");
      
      fs.appendFile("log.txt", eventData + divider, function(err) {
        if (err) throw err;
        console.log(eventData);
      });
    });
  };

}

module.exports = Search;