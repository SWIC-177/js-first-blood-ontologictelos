// This was made with the help of claude ai

function team1 (team1Score) {
    return function add() {
      return ++ team1Score;
    };
  }

  const redTeam = team1 (2);
console.log(`Red Team:`, redTeam());

function team2 (team2Score) {
    return function add() {
        return ++ team2Score;
    };
}

const blueTeam = team2 (4);
console.log(`Blue Team:` , blueTeam());

// working on feature. no ai help

function whosWinning () { 
    if (team1() === team2()) return `Tie game!;`
    else if (team1() > team2()) return `Red team is winning!`;
    else (team1() < team2()) return `Blue team is winning!`; //what? why?
};


console.log(whosWinning)
