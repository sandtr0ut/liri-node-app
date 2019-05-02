## liri-node-app
<br>

#### LIRIbot searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.<br>

### About
 * User may access LIRI's functions via command-line interface
 * First, user must supply .env file with relevant API keys
 * LIRI won't help you do market research or file your taxes.
 * With very few exceptions, LIRI can't help with school or your job.
 * What she CAN do for you is find information related to the stuff that makes you smile so, ...
 * LIRI is _**good for the soul**_.
<br>

### Use Case

It is Wednesday.  You're tapping-out a few tens of thousands of lines of code, doing your part for society, making The Man richer, while you try to save a few shekels for retirement and an Oculus Rift.  "What's that dang song in my head?  I love that tune.  It's from that one movie..." ... ... "Got it!  I'll search it up!"

Now, a lesser man or woman might punt, order the club sandwich, and Google it.  Hahaaa but not you.  **You've got LIRIbot!**

Armed with LIRI, a more elegant tool from a more civilized age, you "movie-this" your way to confirming that you have the right movie.  Bingo. Now the soundtrack is easily identifiable and you confirm the name of the tune you keep hearing.  "But, who is the artist?"

boom. No, ...BOOM!  LIRIbot has your back again.  Hit her with a "spotify-this-song" and you get back the artist's name, the album, AND a preview link to the song from Spotify!  ...and, as if that weren't enough, the dev's here at LIRIbot have more in store for you.

We want you to really get loose.  Try "concert-this <artist/band name here>" to pull up all the upcoming tour dates! Now get on the horn to your friends and make some plans!  

Also, don't forget to check your `log.txt` file for a text record of your session.

**your welcome.**

<br>  

### Supported Commands  
COMMAND | PARAMETER(S) | DEPENDENCIES | API(S)
------- | ------------ | ------------ | ------
concert-this | Arist or Band Name | Axios & Moment NPM Pkgs | Bands in Town, Moment
spotify-this-song | Song Name | Node Spotify API & dotenv NPM Pkgs | Spotify
movie-this | Movie Name | Axios NPM Pkg | OMDB
do-what-it-says | n/a | Node File System | Varies according to random.txt contents
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

##### Result if Movie Parameter is Missing:  <br>

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

My LiriBot likes to keep me on my toes and tends to bust my chops if and when I slip up (like when I forget to include a command argument, even though the instructions clearly state that one is required).  Sometimes Liri is helpful.  Other times she can be a bit of a smart-ass.  Hopefully, you won't have to find out which is that case for you!

<br>

### Development Tools Used
Tool | Use
---- | ---
Node.JS | App Logic
Axios | API Integration
OMDB, BIT, Spotify | API
Moment.js | Time-Data Manipulation
<br>

#### Backlink References:
https://sandtr0ut.github.io/Responsive-Portfolio/portfolio.html

