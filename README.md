<h1 align="center">liri-node-app</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/sandtr0ut/liri-node-app#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/sandtr0ut/liri-node-app/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/sandtr0ut/liri-node-app/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

#### LIRIbot searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.<br>

## About LIRI

- User may access LIRI's functions via command-line interface
- First, user must supply .env file with relevant API keys
- LIRI won't help you file your taxes.
- LIRI is NOT related to SIRI.
- With very few exceptions, LIRI can't help with school or your job.
- What she CAN do for you is find information related to the stuff that makes you smile so, ...
- LIRI is _**good for the soul**_.
  <br>

## Use Case

It is Wednesday. You're tapping-out a few tens of thousands of lines of code, doing your part for society, making The Man richer, while you try to save a few shekels for retirement and an Oculus Rift. "What's that dang song in my head? I love that tune. It's from that one movie..." ... ... "Got it! I'll search it up!"

Now, a lesser man or woman might punt, order the club sandwich, and Google it. Hahaaa but not you. **You've got LIRIbot!**

Armed with LIRI, a more elegant tool from a more civilized age, you "movie-this" your way to confirming that you have the right movie. Bingo. Now the soundtrack is easily identifiable and you confirm the name of the tune you keep hearing. "But, who is the artist?"

boom. No, ...BOOM! LIRIbot has your back again. Hit her with a "spotify-this-song" and you get back the artist's name, the album, AND a preview link to the song from Spotify! ...and, as if that weren't enough, the dev's here at LIRIbot have more in store for you.

We want you to really get loose. Try "concert-this <artist/band name here>" to pull up all the upcoming tour dates! Now get on the horn to your friends and make some plans!

Also, don't forget to check your `log.txt` file for a text record of your session.

**your welcome.**

# Usage

### 🏠 [Homepage](https://github.com/sandtr0ut/friend-finder#readme)

## Installation

```sh
npm install
```

## Supported Commands

| COMMAND           | PARAMETER(S)       | DEPENDENCIES                       | API(S)                                  |
| ----------------- | ------------------ | ---------------------------------- | --------------------------------------- |
| concert-this      | Arist or Band Name | Axios & Moment NPM Pkgs            | Bands in Town, Moment                   |
| spotify-this-song | Song Name          | Node Spotify API & dotenv NPM Pkgs | Spotify                                 |
| movie-this        | Movie Name         | Axios NPM Pkg                      | OMDB                                    |
| do-what-it-says   | n/a                | Node File System                   | Varies according to random.txt contents |

<br>

### Examples

#### Bands-in-Town API <br>

##### Command: <br>

`node liri.js concert-this <artist/band name here>` <br>

##### Input: <br>

(searching for concert dates for the band, Lettuce, using Liri's 'concert-this' command) <br>

![concert-this](https://user-images.githubusercontent.com/47204349/57005598-febef900-6b8d-11e9-89f9-6aae8d5039c3.JPG)

<br>

##### Result: <br>

![concert-this_results](https://user-images.githubusercontent.com/47204349/57005683-dc79ab00-6b8e-11e9-80a2-019779674070.JPG)

<br>

#### Node-Spotify-API <br>

##### Command: <br>

`node liri.js spotify-this-song '<song name here>'`

##### Input: <br>

(searching for song, artist, album, and link to a song preview of "Hey Hey, What Can I Do?" using Liri's 'spotify-this-song' command) <br>

![spotify-this-song](https://user-images.githubusercontent.com/47204349/57048514-1d260280-6c29-11e9-9091-5e0703a3fd5a.JPG)

<br>

##### Result: <br>

![spotify-this-song_results](https://user-images.githubusercontent.com/47204349/57048531-2c0cb500-6c29-11e9-99c3-5e2c6ee25317.JPG)

<br>

##### Result if Song Parameter is Missing: <br>

![song-missing](https://user-images.githubusercontent.com/47204349/57050674-b60d4b80-6c32-11e9-9fad-8597aa79f4f2.JPG)

<br>

#### OMDB API <br>

##### Command: <br>

`node liri.js movie-this '<movie name here>'`

##### Input: <br>

(searching OMDB API for the film, BASEketball, requesting film title, release date, IMDB rating, Rotten Tomatoes rating, production location, language, plot summary, and cast) <br>

![movie-this](https://user-images.githubusercontent.com/47204349/57048672-cd940680-6c29-11e9-8313-a5de0724c44f.JPG) <br>

<br>

##### Result: <br>

![movie-this_results](https://user-images.githubusercontent.com/47204349/57048714-f61c0080-6c29-11e9-9640-5e7b20fd9605.JPG)

<br>

##### Result if Movie Parameter is Missing: <br>

![movie-missing](https://user-images.githubusercontent.com/47204349/57050629-7fcfcc00-6c32-11e9-9fb4-a67a1cc6983c.JPG)

<br>

#### Surprise Me <br>

##### Command: <br>

`node liri.js do-what-it-says`

##### Input: <br>

(this command will access random.txt and run whatever command is listed)

![do-what-it-says](https://user-images.githubusercontent.com/47204349/57048854-9114da80-6c2a-11e9-97b5-7f25a73b5e48.JPG) <br>

<br>

##### Result: <br>

![do-what-it-says_results](https://user-images.githubusercontent.com/47204349/57048873-aee23f80-6c2a-11e9-8465-d4de29ae3f8f.JPG)

<br>

#### Woops! Forgot to Include a Command <br>

`node liri.js` <br>

My LiriBot likes to keep me on my toes and tends to bust my chops if and when I slip up (like when I forget to include a command argument, even though the instructions clearly state that one is required). Sometimes Liri is helpful. Other times she can be a bit of a smart-ass. Hopefully, you won't have to find out which is that case for you!

<br>

### Development Tools Used

| Tool               | Use                    |
| ------------------ | ---------------------- |
| Node.JS            | App Logic              |
| Axios              | API Integration        |
| OMDB, BIT, Spotify | API                    |
| Moment.js          | Time-Data Manipulation |

<br>

## Author

👤 **Ford Crosby**

- Website: [fordcrosby.com](fordcrosby.com)
- LinkedIn: [@FordCrosby](https://www.linkedin.com/in/fordcrosby/)
- Github: [@sandtr0ut](https://github.com/sandtr0ut)
- Twitter: [@FordCrosby](https://twitter.com/FordCrosby)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/sandtr0ut/liri-node-app/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/sandtr0ut">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2019 [Ford Crosby](https://github.com/sandtr0ut).<br />
This project is [MIT](https://github.com/sandtr0ut/friend-finder/blob/master/LICENSE) licensed.

---
