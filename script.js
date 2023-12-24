let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9 + 1)

const compareGuesses = (user,comp,sec) => {
  if(user == sec){
    return true
  }
  else if (comp == sec){
    return  false
  }
  else if((sec - comp) >= (sec - user)){
    return true
  }
  else {
    return false
  }
}

const updateScore = winner => winner == 'human' ? humanScore += 1 : computerScore +=1;

const advanceRound = () => currentRoundNumber +=1;


