require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');


var Search = function () {
  var divider = "\n---------------------------------------------------\n\n";

  // this method gets data from Bands-in-Town API,
  // in-response to 'concert-this' command
  this.findConcert = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function (response) {

      var jsonData = response.data[0];

      var eventData = [
        "Venue:  " + jsonData.venue.name,
        "City:  " + jsonData.venue.city,
        "Date:  " + jsonData.datetime
      ].join("\n\n");

      fs.appendFile("log.txt", eventData + divider, function (err) {
        if (err) throw err;
        console.log(eventData);
      });
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

        let track = data.tracks.items[0];

        var songData = [
          "Artist: " + track.album.artists[0].name,
          "Title: " + track.name,
          "Preview URL: " + track.external_urls.spotify,
          "Album: " + track.album.name
        ].join("\n\n");

        fs.appendFile("log.txt", songData + divider, function (err) {
          if (err) throw err;
          console.log(songData);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };


  this.findMovie = function (movieName) {

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