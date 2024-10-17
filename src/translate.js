async function translate(word){
    
    try{ 
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        console.log(data); 

        return data 

    } catch(error){
        console.error(error); 
    }

}

export default translate