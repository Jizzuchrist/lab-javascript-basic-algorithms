// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Erika"
let hacker2 = "Miguel"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let size1 = hacker1.length;
let size2 = hacker2.length;

if (size1 > size2){
    console.log(`The driver has the longest name, it has ${size1} characters.`)
} else if (size1 < size2){
    console.log(`It seems that the navigator has the longest name, it has ${size2}`)
} else {
    console.log(`Wow, you both have equally long names, ${size1}`)
}

// Iteration 3: Loops
let driver = hacker1.toUpperCase();
let fDriver = "";

for (let i = 0; i < size1 ; i++){
    if (size1 - 1 === i){
        fDriver += driver[i];
    } else{
        fDriver += driver[i] + " ";
    }    
}
console.log(fDriver);

reverseName = "";

for (let x = size1; x >= 0; x--){
        reverseName += hacker2[x];
}
console.log(reverseName);

