
// run control + option + n 

//function declaration

function sayHello(){
    console.log("Hello world!")
}

sayHello() // tem que envocar a funcao para ela aparecer 

function sayHelloTo(name){
    console.log(`hello ${name}!`)
}

sayHelloTo("Mike") // hello Mike 
sayHelloTo() // sem parametro retorna "hello undefined"


function returnHi(){
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)  // ou console.log(returnHi())

function returnHiTO (name) {
    return `Hi ${name}`
}

console.log(returnHiTO("Jonez"))