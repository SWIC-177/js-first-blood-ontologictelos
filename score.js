// create a function that logs to console the score of two teams
// create an argument called score that can be passed to functions
// 

// const red = 0
// const blue = 0

// function team1 (){
    // return red + 1
// }

// console.log(team1)

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

const blueTeam = team2 (0);
console.log(`Blue Team:` , blueTeam());