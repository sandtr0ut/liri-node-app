require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var Search = function() {
  var divider = "\n---------------------------------------------------\n\n";
  
  this.findEvent = function(artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    axios.get(URL).then(function(response) {
      
      var jsonData = response.data[0];
      
      var eventData = [
        "Venue:  " + jsonData.venue.name,
        "City:  " + jsonData.venue.city,
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