// explain the code
const INCREMENTS = [1, 2, 3];

function createScoreIncrementor(increment) {
  return (score) => score + increment;
}

let score = 0;

const scoreUpdaters = INCREMENTS.map(createScoreIncrementor);

console.log(scoreUpdaters);