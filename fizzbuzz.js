// print numbers 1-100 to console
// multiples of 3 print fizz
// multiples of 5 print buzz
// how do i replace a number with a string?

for(let i=1;i<=100;i+=1) {
if (i%3 ===0 && i%5 ===0){
    console.log('fizzbuzz')
  } else if (i%3 === 0) {
  console.log('fizz')
  } else if (i%5 ===0){
    console.log('buzz')
  } 
  else {console.log(i)}
}