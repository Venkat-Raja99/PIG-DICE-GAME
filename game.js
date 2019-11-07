var current, score, active, game, name0, name1;

initialise(); //to initialise the game as new.

//Roll-Button
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //If the game is running the execute the button.
    if(game){
        
        //dices' value is calculated.
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;

        //If [either of the dice value is not one.]
        if ( dice1 != 1 && dice2 != 1){

            //dices are visible
            dice_visible();

            //Adds to current score
            current += (dice1 + dice2);

            //UI updates -[ Dice 1 & 2 displayed, Current Score is displayed]
            document.querySelector('.dice-0').src='dice-' + dice1 + '.png';
            document.querySelector('.dice-1').src='dice-' + dice2 + '.png';
            document.getElementById('current-' + active).textContent = current;
        
        } else { 

            //When any of the dice is rolled to 1; Player turn shifts
            player_turn_shift(); 
        }      
    }
});

//Hold-Button
document.querySelector('.btn-hold').addEventListener('click', function(){
    //if game playing
    if(game){
        
        //Add the current the score to global score.
        score[active] += current;
        
        //set the winning score
        var final = document.querySelector('.final-score').value;
        var winn;
        
        //set a flag.
        final > 0 ? winn = final : winn = 100;
        
        //check for a win
        if(score[active] >= winn){
           
            //then declare the winner.
            document.querySelector('.player-' + active + '-panel').classList.remove('active');
            document.querySelector('.player-' + active + '-panel').classList.add('winner');
            
            //the set game playing to false to stop game to move further.
            game = false;
            
            //if won; Update the UI.
            document.getElementById('name-' + active).textContent = 'Winner!';
            
            active === 0 ? alert('The Game is won by ' + name0) : alert('the game is won by ' + name1);
            
        } else{
            
            //Update the UI.
            document.getElementById('score-' + active).textContent = score[active];
            
            //Shif the player's turn.
            player_turn_shift();   
        } 
    }
});

//New-Game-Button
document.querySelector('.btn-new').addEventListener('click', initialise);

//Initialise a new game function.

function initialise (){
    
    var n1, n2;
    score = [0,0];
    current = 0;
    active = 0;
    game = true;
    
    name0 = prompt("Enter Player 1's name:");
    name1 = prompt("Enter Player 2's name:");
    
    if(name0 == '' && name1 == ''){
        console.log('not required to change name');
    } else if (name0 == '' && name1 != ''){
        document.getElementById('name-1').textContent = name1;
    } else if (name0 != '' && name1 == ''){
        document.getElementById('name-0').textContent = name0;
    } else {
        document.getElementById('name-0').textContent = name0;
        document.getElementById('name-1').textContent = name1;
    }
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    dice_hidden();
}

//Player shifting function.

function player_turn_shift (){
     //current score is 0 & UI update.
            current = 0;
            document.getElementById('current-' + active).textContent = '0';
        
        //Player turn shifts]
            //dices are hidden.
            dice_hidden();
            
            //active Player changes.
            active === 0 ? active = 1 : active = 0; //changes the index [Ternary Operator].
            
            //active player UI updates.
            document.querySelector('.player-0-panel').classList.toggle('active'); 
            //adds active if present else removes it.
            document.querySelector('.player-1-panel').classList.toggle('active'); //adds active if present else removes it.
}

//Dice Hidden function:

function dice_hidden (){
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}


//Dice Visible function:

function dice_visible (){
    document.querySelector('.dice-0').style.display = 'block';
    document.querySelector('.dice-1').style.display = 'block';
}










