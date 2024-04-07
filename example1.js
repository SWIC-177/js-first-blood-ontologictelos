// name is being declared and given the value "john doe"
// otherName is given the value name temporarily.
// explain pass by copy/value

const name = "John Doe";
let otherName = name;

console.log(`Name is: ${name}`);
console.log(`Other name is: ${otherName}`);

otherName = "Jane Doe";

console.log(`Name is: ${name}`);
console.log(`Other name is: ${otherName}`);

otherName = 23;
console.log(`Name is: ${name}`);
console.log(`Other name is: ${otherName}`);