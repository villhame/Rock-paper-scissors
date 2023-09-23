//👊 ✋ ✌️ 🤖
console.log("Hello World");

//Win/ lose/ draw/ results
let wCount = 0;
let lCount = 0;
let dCount = 0;
let huhCount = 0;


const playText = document.querySelector('.playText')
const scoreText = document.querySelector('.scoreText')

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
function score(){
    // let yourScore = 0;
    // let roboScore = 0;
    if(wCount < 4 && lCount < 4){
        // yourScore += 1;
        // roboScore += 1;
        scoreText.textContent = `Your score: ${wCount} and 🤖 = ${lCount} `;
    }
    else{
        scoreText.textContent = `Game Over! `;
    }
}


function playRound( Player, Computer) {
    //Player = Player.toLowerCase();
    console.log(Player);
    //draw conditions
    if( Player === 'rock' && Computer === 'rock') {
        dCount += 1;
        score();
        return 'Draw: 🤖 had 👊 as well.' 
    }
    else if( Player === 'paper' && Computer === 'paper') {
        dCount += 1;
        score();
        return 'Draw: 🤖 had ✋ as well.'  
    }
    else if( Player === 'scissors' && Computer === 'scissors') {
        dCount += 1;
        score();
        return 'Draw: 🤖 had ✌️ as well.' 
    }
    // win conditions
    else if( Player === 'rock' && Computer === 'scissors') {
        wCount += 1;
        score();
        return 'You win! 🤖 had ✌️' 
    }
    else if( Player === 'paper' && Computer === 'rock') {
        wCount += 1;
        score();
        return 'You win! 🤖 had 👊' 
    }
    else if( Player === 'scissors' && Computer === 'paper') {
        wCount += 1;
        score();
        return 'You win! 🤖 had ✋' 
    }
    // lose conditions
    else if( Player === 'rock' && Computer === 'paper') {
        lCount += 1;
        score();
        return 'You lose! 🤖 had ✋' 
    }
    else if( Player === 'paper' && Computer === 'scissors') {
        lCount += 1;
        score();
        return 'You lose! 🤖 had ✌️' 
    }
    else if( Player === 'scissors' && Computer === 'rock') {
        lCount += 1;
        score();
        return 'You lose! 🤖 had 👊' 
    }
    else{
        huhCount += 1;
        score();
        return 'invalid input'
    }
}

function gameOver() {
    
    //win conditions
    if( wCount >= 3){
        console.log('You win!');
        return "You won the game against 🤖!";;
    }

    else if( lCount >= 3){
        console.log('You lose!');
        return "You lost the game!";
    }

    // else if( dCount >= 3){
    //     console.log('You Draw!');
    //     return 'You Draw!';
    // }
    else{
        return "yeet";
    }
}



function playOption(){    
    let roundResult;

    const btn = document.querySelector('.card');
    btn.addEventListener('click', () => {
    console.log("you cheeky bugger");


    });  
            //what happens when you click Rock
            const Rock = document.querySelector('#Rock');
            Rock.addEventListener('click', () => {
                console.log('rock');
                playText.textContent = "You picked rock" 
                roundResult = playRound('rock', getComputerChoice());
                playText.textContent = roundResult;
                //think about adding delay
                console.log("Current wCount/dCount/lCount: " + wCount + "/ " + dCount + "/ " + lCount );
                //win conditions

                if(wCount >= 3 || lCount >= 3 ){
                    playText.textContent = gameOver();
                }
                return 'rock';
            });

            //what happens when you click Paper
            const Paper = document.querySelector('#Paper');
            Paper.addEventListener('click', () => {
                console.log('paper');
                playText.textContent = "You picked paper" 
                roundResult = playRound('paper', getComputerChoice());
                playText.textContent = roundResult;
                console.log("Current wCount/dCount/lCount: " + wCount + "/ " + dCount + "/ " + lCount );
                //playText.textContent = gameOver();
                // if(wCount <= 3 || lCount <= 3 ){
                //     scoreText.textContent = `Your score: ${wCount} and 🤖 = ${lCount} `;
                // }
                    //win conditions
                if(wCount >= 3 || lCount >= 3 ){
                    playText.textContent = gameOver();
                }
                return 'paper';
            });

            //what happens when you click Scissors
            const Scissors = document.querySelector('#Scissors');
            Scissors.addEventListener('click', () => { //function (e) {
                console.log('scissors');
                playText.textContent = "You picked scissors" 
                roundResult = playRound('scissors', getComputerChoice());
                playText.textContent = roundResult;
                console.log("Current wCount/dCount/lCount: " + wCount + "/ " + dCount + "/ " + lCount );
                    //win conditions
                // if(wCount <= 3 || lCount <= 3 ){
                //     scoreText.textContent = `Your score: ${wCount} and 🤖 = ${lCount} `;
                // }
                if(wCount >= 3 || lCount >= 3 ){
                    playText.textContent = gameOver();
                }
                //playText.textContent = gameOver();
                return 'scissors';
            });    
         
}



playOption();





playText.append()
scoreText.append()
