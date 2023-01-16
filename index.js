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

let reverseName = "";

for (let x = size1; x >= 0; x--){
        reverseName += hacker2[x];
}
console.log(reverseName);

if (hacker1.localeCompare(hacker2) === -1){
    console.log("The Driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae urna tortor. Praesent eleifend, purus at finibus facilisis, tellus tellus lobortis purus, eu venenatis ipsum massa non ex. Donec mattis tellus massa, eget commodo odio pulvinar eu. Donec ultrices rhoncus erat, ac ultricies neque hendrerit id. Nunc id laoreet quam, quis pellentesque massa. Donec cursus lobortis elementum. Proin fringilla dolor arcu, vel malesuada justo lacinia id. Proin tellus enim, sodales vel augue at, efficitur rutrum eros. Sed sagittis molestie lorem vitae euismod. Cras blandit suscipit pharetra. Sed consequat sapien sed blandit malesuada. Sed tempus blandit augue, eu varius urna luctus quis. Ut dolor urna, placerat nec tellus malesuada, ullamcorper laoreet metus. Maecenas semper urna eget elit bibendum, in dictum ante auctor. Ut mattis lorem sed convallis aliquam. Donec eleifend commodo orci quis aliquet. Duis dictum neque varius, sagittis dui et, tempus justo. Sed porta fringilla sollicitudin. Mauris ac interdum urna. Vestibulum lacinia neque in orci congue varius. Quisque sodales nulla nec mauris sodales interdum. Nunc ac lacus et neque mollis tempus et id ligula. Aenean at est sollicitudin, volutpat libero eget, varius nulla. Morbi malesuada dolor velit, sed finibus quam porttitor eget. Nullam mi risus, consectetur sit amet convallis a, tincidunt et quam. Ut non quam vulputate, dignissim nisl ac, lacinia enim. Nullam non ligula massa. Donec bibendum sem sed felis finibus molestie. Curabitur eget ex consectetur, semper nisi eu, euismod nunc. Morbi efficitur diam vel urna aliquam luctus. Aliquam tristique at eros sed sodales. Nullam vitae nibh ut velit aliquet accumsan.'

sizeParagraph = longText.length;
console.log(sizeParagraph)
comparison = "";
numberWords = 0;
numberEt = 0;

for (let z = 0; z < sizeParagraph; z ++){
    if (longText[z] === " " ){
        numberWords ++;
    } else if (longText[z] ===", "){
        numberWords ++;
    } else if (longText[z] === ". ") {
        numberWords ++;
    } else if (z === sizeParagraph - 1 ){
        numberWords ++;
    } else {
        continue;
    }   
}
console.log(numberWords)

z = 0

for (z = 0; z < sizeParagraph; z++){
    if (longText[z] + longText[z+1] === "et"){
        numberEt ++;
    } else{
        continue;
    }
}
console.log(numberEt)
