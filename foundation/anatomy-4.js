// anonymous function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c){
    let x = 3
    console.log(`Result ${a + b + c}`)
    console.log(x)
}) (1, 2, 3); // consegue executar o code, nesse caso e necessario o ";" no final 


(function (a, b, c){
    let x = 300
    console.log(x)
}) ();

// use the arrow function 

(() => {
    console.log('Arrow One')
}) (); 


(() => console.log('Arrow Two')) (); 