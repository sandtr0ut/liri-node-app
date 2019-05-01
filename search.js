require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var moment = require("moment");


var Search = function () {
  var divider = "\n---------------------------------------------------\n\n";

  // this method gets data from Bands-in-Town API,
  // in-response to 'concert-this' command
  this.findConcert = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function (response) {

      var jsonData = response.data;
      
      if (!jsonData.length) {
        console.log("No results found for " + artist);
        return;
      }
      
      var eventData = [];
      
      eventData.push("Upcoming concerts for " +  artist + ": ");
      
      for (var i = 0; i < jsonData.length; i++) {
        var event = jsonData[i];

      eventData.push(
        "City: " + event.venue.city + ", " +
        "Venue: " + event.venue.name + ", " +
        "Date: " + moment(event.datetime).format("MM/DD/YYYY")
      );
    }

    fs.appendFile("log.txt", eventData + divider, function (err) {
        if (err) throw err;
        
      });
      console.log(eventData.join("\n"));
    });
  };

  // this method gets data from Spotify API,
  // in-response to 'spotify-this-song' command
  this.findSong = function (song) {
    //api keys hidden in .env, linked to keys file
    var spotify = new Spotify(keys.spotify);

    // spotify's node package handles call itself
    // thus, no need for axios
    spotify
      .search({
        type: 'track',
        query: song
      }).then(function (data) {

        var track = data.tracks.items;
        var songData = [];
        for (let i = 0; i < track.length; i++) {
          
        songData.push({
          "Artist: ": track[i].album.artists[0].name,
          "Title: ": track[i].name,
          "Preview URL: ": track[i].external_urls.spotify,
          "Album: ": track[i].album.name
        });
        // }).join("\n\n");
      }
      var songLog = JSON.stringify(songData);
      fs.appendFile("log.txt", songLog + divider, function (err) {
        if (err) throw err;
        
      });
      console.log(songData);
    })
      .catch(function (err) {
        console.log(err);
      });
  };


  this.findMovie = function (movieName) {
    if (!movieName) {
      movieName = "Mr Nobody";
    }
    var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(URL).then(function (response) {

      var jsonData = response.data;

      var filmData = [
        "Title:  " + jsonData.Title,
        "Released:  " + jsonData.Year,
        "IMDB Rating:  " + jsonData.Ratings[0].Value,
        "Rotten Tomatoes:  " + jsonData.Ratings[1].Value,
        "Production Location:  " + jsonData.Country,
        "Language:  " + jsonData.Language,
        "Plot Summary:  " + jsonData.Plot,
        "Cast:  " + jsonData.Actors,
      ].join("\n\n");

      fs.appendFile("log.txt", filmData + divider, function (err) {
        if (err) throw err;
        console.log(filmData);
      });
    });
  }

}

// export to liri.js
module.exports = Search;