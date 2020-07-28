const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke');
const authorText = document.getElementById('author');
const TwitterBtn = document.getElementById('twitter');
const newJokeBtn = document.getElementById('new-joke');

// Get joke from API
async function getJoke() {
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';
    try {
       const response = await fetch(apiUrl);
       const data = await response.json();

       // Reduce font size for long jokes
       if (data.joke.length > 120) {
         jokeText.classList.add('long-joke');
       } else {
         jokeText.classList.remove('long-joke')
       }
       jokeText.innerText = data.joke ;
    } catch (error) {
    
    }
}

//Tweet Joke
function tweetJoke() {
  const joke = jokeText.innerText; 
  const twitterUrl = `https://twitter.com/intent/tweet?text=${joke}`;
  window.open(twitterUrl, '_blank');
}

// Event Listners
newJokeBtn.addEventListener('click', getJoke);
TwitterBtn.addEventListener('click', tweetJoke);

// On Load
getJoke();