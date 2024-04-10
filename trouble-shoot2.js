const people = [
    {
      id: 1,
      name: "John Doe",
      age: 23,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 29,
    },
    {
      id: 3,
      name: "Jim Doe",
      age: 34,
    },
    {
      id: 4,
      name: "Jill Doe",
      age: 45,
    },
    {
      id: 5,
      name: "Jack Doe",
      age: 56,
    },
    {
      id: 6,
      name: "Jenny Doe",
      age: 67,
    },
  ];
  // must create new object {...p}
  // then create logic loop for finding/renaming odds
  // return the new object to console.
  // 
  function renameOdds(p) {
    const oddName = [...p];
    for (let i = 0; i < oddName.length; i+= 1) {
      if (oddName[i].id % 2 !== 0) {
        oddName[i] = { ...oddName[i], name: "Odd Name" };
      }
    }
  
    return oddName;
  }
  
  console.log(renameOdds(people));