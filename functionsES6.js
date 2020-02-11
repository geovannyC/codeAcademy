const getUserChoice = userInput =>{
    userInput.toLowerCase();
    
    if (userInput === 'piedra' || 'papel' || 'tijera'){
        console.log(`haz elejido ${userInput}`)
    }
    else{
        console.log('hey escribe algo valido')
    }

}
getUserChoice('123')