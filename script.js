console.log("Hello World");

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
    Player = Player.toLowerCase();
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

 function Game() {
    let wCount = 0;
    let lCount = 0;
    let dCount = 0;
    //for (let i = 0; i < 5; i++) {
        let roundResult = playRound(prompt(), getComputerChoice());
        console.log(roundResult);
        //draw counts
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
            console.log('what happened');
        }
     }
    if( wCount >= 3){
        return 'You win!'
    }
    if( lCount >= 3){
        return 'You lose!'
    }
    if( dCount >= 3){
        return 'You draw!'
    }
 //}

 console.log(Game());

// const input = prompt();



