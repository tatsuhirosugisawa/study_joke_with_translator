import generateJoke from "./generateJoke";
import './style/main.scss'

//import laughing from './assets/laughing.svg'

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)


console.log(generateJoke())
console.log(1)
