// This was made with the help of claude ai

function team1 (team1Score) {
    return function add() {
      return ++ team1Score;
    };
  }

  const redTeam = team1 (2);
console.log(`Red Team:`, redTeam()); // Output: 1

function team2 (team2Score) {
    return function add() {
        return ++ team2Score;
    };
}

const blueTeam = team2 (4);
console.log(`Blue Team:` , blueTeam());

if (team1() > team2()) {
    console.log (`Red team is winning`)
}else if (team1() < team2()) {
    console.log (`Blue team is winning`)
};