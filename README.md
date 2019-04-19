## liri-node-app
#### Homework #7<br>

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

Now, a lesser man or woman might punt, order the club sandwich, and Google it.  Hahaha but not you.  **You've got LIRIbot!**

Armed with LIRI, a more elegant tool from a more civilized age, you "movie-this" your way to confirming that you have the right movie.  Bingo. Now the soundtrack is easily identifiable and you confirm the name of the tune you keep hearing.  "But, who is the artist?"

BOOM.  LIRIbot has your back again.  Hit her with a "spotify-this-song" and you get back the artist's name, the album, AND a preview link to the song from Spotify!  ...and, as if that weren't enough, the dev's here at LIRIbot have more in store for you.

We want you to really get loose.  Try "concert-this <artist/band name here>" to pull up all the upcoming tour dates! Now get on the horn to your friends and make some plans!  

Also, don't forget to grab your log file for a text record of your session.

**your welcome.**

<br>  

### Supported Commands  
COMMAND | PARAMETER(S) | SAMPLE
------- | ------------ | ------
concert-this | Arist or Band Name | `node liri.js concert-this <artist/band name here>`
spotify-this-song | Song Name | `node liri.js spotify-this-song '<song name here>'`
movie-this | Movie Name | `node liri.js movie-this '<movie name here>'`
do-what-it-says | n/a | `node liri.js do-what-it-says`
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

