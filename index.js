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
let fdriver = "";

for (let i = 0; i < size1 ; i++){
    if (size1 - 1 === i){
        fdriver += driver[i];
    } else{
        fdriver += driver[i] + " ";
    }    
}
console.log(fdriver);