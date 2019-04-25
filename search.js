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
  
  this.findSong = function(song) {
    var spotify = new Spotify(keys.spotify);
     
    spotify
      .search({ 
        type: 'track', 
        query: song
      }).then(function(data) {
        
        let track = data.tracks.items[0];
        
        var songData = [
          "Artist: " + track.album.artists[0].name,
          "Title: " + track.name,
          "Preview URL: " + track.external_urls.spotify,
          "Album: " + track.album.name
        ].join("\n\n");
        
        fs.appendFile("log.txt", songData + divider, function(err) {
          if (err) throw err;
          console.log(songData);
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

}

module.exports = Search;