
function verifyAdulthood(){
    const firstName = "Mark";
    const age = 30; 

    if (age >= 18)  return (`Welcome, ${firstName}`);
    return (`You are not old enough to enter, ${firstName}`);
}

console.log (verifyAdulthood);