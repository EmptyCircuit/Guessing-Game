function abcd(){
let radomNr = Math.floor(Math.random() * 11 + 1)
let guess;


do {

    guess = prompt("Guess the number between 1-10")
    console.log(guess, radomNr)
    if(radomNr > guess){
        console.log("Your Guessed is too low")
    }else if(radomNr < guess){
        console.log("Your Guessed is too High")
    }
    
}while(guess != radomNr)
    console.log("You Won")

}

abcd()