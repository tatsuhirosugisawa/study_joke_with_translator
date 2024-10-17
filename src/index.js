import generateJoke from "./generateJoke";
import translate from "./translate"; 
import './style/main.scss'

//import laughing from './assets/laughing.svg'

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

const translateBtn = document.getElementById('wordBtn')
translateBtn.addEventListener('click', async () => {
    const getWord = document.getElementById('word').value;  // Use 'value' to get the input
    const wordDefinition = document.getElementById("word-definition");
    const wordMeanings = document.getElementById("word-meanings");    
    
    if (getWord) {
        wordDefinition.style.display = 'none';  // Hides the element
        wordMeanings.style.display = 'none';    // Hides the element
    }
    
    const data = await translate(getWord);


    if (data) {
        wordDefinition.style.display = 'block';
        wordMeanings.style.display = 'block';
        wordDefinition.innerHTML = '';
        wordMeanings.innerHTML = '';
    }
    
    // Create and append the word definition
    let newElement = document.createElement('div');
    newElement.innerHTML = `
        <div>Word: ${data[0].word}</div>
        <audio src="${data[0].phonetics[0].audio}" controls></audio>
        <div>Origin: ${data[0].origin || "No origin available"}</div>
        <hr>
    `;  
    wordDefinition.appendChild(newElement);
    

    const meaningLength = data[0].meanings.length;
    for (let i = 0; i < meaningLength; i++) {
        let newElement1 = document.createElement('div');
        let definitionLength = data[0].meanings[i].definitions.length;
    
        // Add the part of speech
        newElement1.innerHTML = `<div style="font-weight: bold;">${i} Part of Speech: ${data[0].meanings[i].partOfSpeech}</div>`;
    
        // Loop through definitions for the current part of speech
        for (let j = 0; j < definitionLength; j++) {
            // Append the definition and example to the newElement1
            newElement1.innerHTML += `
                <div>Definition: ${data[0].meanings[i].definitions[j].definition}</div>
                <div>Example: ${data[0].meanings[i].definitions[j].example || "No example available"}</div>
                <br>
            `;
        }
    
        // Append newElement1 to the wordMeanings div
        wordMeanings.appendChild(newElement1);
    }

});

console.log(generateJoke())