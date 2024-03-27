const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Issue 1: The for loop condition should have a terminating condition
// Issue 2: The semicolon after the if condition should be removed
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]%2 === 0) {
    console.log(numbers[i]);
  }
}