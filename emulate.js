const mark = {
    name: "Mark",
    age: 25,
    isAdult: true,
};

function createGreeting(individual) {
    return(salutation) => `${salutation},${individual.name}!`;
}

const greetMark= createGreeting(mark);
console.log(greetMark("hey"));