//Welcome to the PIG GAME, my first project on JavaScript. Given below are the rules for playing this game


/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/*var score, activeIndex, currentScore, playing ;

initialise();

//Roll Dice Button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (playing){
      //Dice is rolled.
   var dice = Math.floor(Math.random()*6)+1;
   
    if (dice != 1){

    //Addition of Scores if not rolled 1 in dice.
    currentScore += dice;
    
    //UI gets updated.
    document.getElementById('current-' + activeIndex).textContent = currentScore;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src ='dice-' + dice + '.png';
       
    } else {
          //If 1 is throw in dice all scores are lost and the chance is transfered to another player.
         document.getElementById('current-' + activeIndex).textContent = currentScore;
         reset();
    }      
    }
});

//Hold Button
document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (playing){
    
        //Current Player's Global Score gets Updated.
    score[activeIndex] += currentScore;
    
    if(score[activeIndex] >= 10){
       document.getElementById('name-'+activeIndex).textContent = 'Winner!';
       document.querySelector('.player-' + activeIndex + '-panel').classList.remove('active');
       document.querySelector('.player-' + activeIndex + '-panel').classList.add('winner');
       playing = false;
       document.getElementById('score-' + activeIndex).textContent = score[activeIndex];
        
       } else {
   
           //UI gets Updated.
    document.getElementById('score-' + activeIndex).textContent = score[activeIndex];
    document.querySelector('.dice').style.display = 'none';
    reset();
}        
}
});

//New Game Button
document.querySelector('.btn-new').addEventListener('click', initialise);


//Additional Lines of necessary code:

function reset (){
    document.getElementById('current-' + activeIndex).textContent = '0';
    activeIndex === 0 ? activeIndex = 1 : activeIndex = 0;
    document.querySelector('.dice').style.display = 'none';
    currentScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
}

function initialise (){
    score = [0,0];
    activeIndex = 0;
    currentScore = 0;
    playing = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
   
}
*/