const firstName = "Mark";
const age = 30; 

function verifyAdulthood(){
    if (age >= 18)  console.info (`Welcome, ${firstName}`);
    else console.info (`You are not old enough to enter, ${firstName}`);
}

console.info (verifyAdulthood)