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

const num = [1,2,3,4,5]
  
 // function renameOdds(p) {
 //   const oddName = [...p];
 //   for (let i = 0; i < oddName.length; i+= 1) {
 //     if (oddName[i].id % 2 !== 0) {
 //       oddName[i] = { ...oddName[i], name: "Odd Name" };
 //     }
 //   }
  
 //   return oddName;
 // }
  // the below code uses the filter() and map() function.
  function even(p) {
    return p.filter(person => person.id % 2 === 0).map(person => person.name);
  }

  function age(p){
    return p.filter(person => person.age > 30).map(person=> person.name)
  }

const numPeople = people.concat(num);
  
  // console.log(renameOdds(people));
  console.log(even(people));
  console.log(numPeople);
  console.log(age(people));

