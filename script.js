
console.log("Hello World");

const playText = document.querySelector('.playText')
const btn = document.querySelector('.card')
//playText.textContent = "I changed this"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
   let x = getRandomInt(3)
   let arr = ['paper', 'scissors', 'rock'];
   console.log('Computer: ' + arr[x]);
   return arr[x];
}

function playRound( Player, Computer) {
    //Player = Player.toLowerCase();
    console.log(Player);
    //draw conditions
    if( Player === 'rock' && Computer === 'rock') {

        return 'It is a draw: Computer had rock as well.';
    }
    else if( Player === 'paper' && Computer === 'paper') {
        return 'It is a draw: Computer had paper as well.';
    }
    else if( Player === 'scissors' && Computer === 'scissors') {
        return 'It is a draw: Computer had scissors as well.';
    }
    // win conditions
    else if( Player === 'rock' && Computer === 'scissors') {
        return 'You win: Computer had scissors!';
    }
    else if( Player === 'paper' && Computer === 'rock') {
        return 'You win: Computer had rock!';
    }
    else if( Player === 'scissors' && Computer === 'paper') {
        return 'You win: Computer had paper!';
    }
    // lose conditions
    else if( Player === 'rock' && Computer === 'paper') {
        return 'You lose: Computer had paper!';
    }
    else if( Player === 'paper' && Computer === 'scissors') {
        return 'You lose: Computer had scissors!';
    }
    else if( Player === 'scissors' && Computer === 'rock') {
        return 'You lose: Computer had rock!';
    }
    else{
        return 'invalid input'
    }
 }

 function results(roundResult){
    let wCount = 0;
    let lCount = 0;
    let dCount = 0;
    let huhCount = 0;

    if(roundResult === 'It is a draw: Computer had rock as well.' || roundResult === 'It is a draw: Computer had paper as well.' || roundResult === 'It is a draw: Computer had scissors as well.' ){
        dCount += 1;
        console.log('You draw this round');
    }
    //win counts
    else if(roundResult === 'You win: Computer had scissors!' || roundResult === 'You win: Computer had rock!' || roundResult=== 'You win: Computer had paper!' ){
        wCount += 1;
        console.log('You win this round');
    }
    //lose counts
    else if(roundResult === 'You lose: Computer had paper!' || roundResult === 'You lose: Computer had scissors!' || roundResult === 'You lose: Computer had rock!' ){
        lCount += 1;
        console.log('You lose this round');
    }
    else{
        huhCount += 1;
        console.log('what happened');
    }
 
    if( wCount >= 3){
        console.log('You win!');
        playText.textContent = "You win!";
        return 'You win!';
    }
    else if( lCount >= 3){
        console.log('You lose!');
        playText.textContent = "You lost!";
        return 'You lose!';
    }
    else if( dCount >= 3){
        console.log('You Draw!');
        playText.textContent = "You Draw!";
        return 'You draw!';
    }
    else if( huhCount >= 3){
        console.log('You do not understand how to play huh');
        playText.textContent = "What happend";
        return 'You do not understand how to play huh';
    }
 }

function playOption(){
    //Win/ lose/ draw/ results

    let roundResult;

    //what happens when yu click Rock
    const Rock = document.querySelector('#Rock');
    Rock.addEventListener('click', () => {
        console.log('rock');
        playText.textContent = "You picked rock" 
        roundResult = playRound('rock', getComputerChoice());
        playText.textContent = roundResult;
        //think about adding delay
        //playText.textContent = results(roundResult);
        return 'rock';
      });

    //what happens when yu click Paper
    const Paper = document.querySelector('#Paper');
    Paper.addEventListener('click', () => {
        console.log('paper');
        playText.textContent = "You picked paper" 
        roundResult = playRound('paper', getComputerChoice());
        playText.textContent = roundResult;
        //playText.textContent = results(roundResult);
        return 'paper';
      });
    //what happens when yu click Scissors
    const Scissors = document.querySelector('#Scissors');
    Scissors.addEventListener('click', () => { //function (e) {
        console.log('scissors');
        playText.textContent = "You picked scissors" 
        roundResult = playRound('scissors', getComputerChoice());
        playText.textContent = roundResult;
        //playText.textContent = results(roundResult);
        return 'scissors';
      });

}

playOption();
playText.append()


