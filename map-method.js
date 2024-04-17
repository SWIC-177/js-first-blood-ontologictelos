const Roster = [
    { name: "John Doe", age: 35 },
    { name: "Jane Smith", age: 28 },
    { name: "Bob Johnson", age: 42 },
    { name: "Alice Williams", age: 31 }
  ];
  
  function updateAge(person) {
    return { ...person, age: person.age + 1 };
  }
  
  const updatedRoster = Roster.map(updateAge);
  
  console.log(updatedRoster);