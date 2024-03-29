// given a const, a person. not told to do anything with it.
const person = {
    name: "John",
    age: 17,
  };
  
// given a task or something to do (verb)
  function verifyAdulthood(personName, personAge) {
    if (personAge >= 18) return `Welcome, ${personName}!`;
  
    return `You are not old enough to enter, ${personName}.`;
  }
  
  const adultMessage = verifyAdulthood(person.name, person.age); // originally this was userName, and userAge which are not defined anywhere else in the code.
  // userName and userAge have not be defined anywhere and thus we would essentially be running nothing through the function.
  console.log(adultMessage);