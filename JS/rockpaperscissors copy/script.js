let score= JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement(); 

function playGame(playerMove) {

    const computerMove=pickComputer();

    let result='';
    if(playerMove==='scissors') {
        if (computerMove === 'paper') {
            result='You win';
        }
        else if (computerMove === 'rock') {
            result='You lose';
        }
        else {
            result='Tie';
        }
    }

    else if(playerMove==='rock') {
        if (computerMove === 'scissors') {
            result='You win';
        }
        else if (computerMove === 'paper') {
            result='You lose';
        }
        else {
            result='Tie';
        }
    }
    else if(playerMove==='paper') {
        if (computerMove === 'rock') {
            result='You win';
        }
        else if (computerMove === 'scissors') {
            result='You lose';
        }
        else {
            result='Tie';
        }
    }
    document.querySelector('.win-lose')
        .innerHTML = `${result}.`;

    if (result === 'You win') {
        score.wins+=1;
    }
    else if (result==='You lose'){
        score.losses+=1;
    }
    else {
        score.ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    
    document.querySelector('.who-win')
        .innerHTML = `You
        <img src="images/${playerMove}.png" alt="${playerMove}" class="object-img">- 
        <img src="images/${computerMove}.png" alt="${computerMove}" class="object-img">
        Computer`;
}

function updateScoreElement() {
    
    document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputer() {

    const randomNumber=Math.random();

    if (randomNumber>= 0 && randomNumber <1/3) {
        return 'rock';
    }
    else if (randomNumber>=1/3 && randomNumber< 2/3) {
        return 'paper';
    }
    else if (randomNumber>=2/3 && randomNumber<1) {
        return 'scissors';
    }

}