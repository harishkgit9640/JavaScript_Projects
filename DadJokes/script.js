
const Joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#btn');

try {
const nextJoke= async()=>{
    const jokeData = await fetch("https://icanhazdadjoke.com",{
        headers : {
            'Accept': 'application/json'
        }
    });
    const jokeobj =  await jokeData.json();
    Joke.innerHTML = jokeobj.joke;
}
jokeBtn.addEventListener('click', nextJoke);
nextJoke();
    } catch (err) {
        console.log(`The Error is ${err}`);
    }
