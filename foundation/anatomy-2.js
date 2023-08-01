// Anonymous function
(function (a, b, c){
    return a + b + c
}) // colocar a funcao anonima em parentese para nao ter erro 

// function expression  trata como uma qualquer outra variável 
var x = 1 
var sum = function (a, b){
    return a + b
} // conseguir atribuir o valor de uma funcoa como o valor de uma variavel e chamado de funcao express 

const result = sum(7, 59) 
console.log(result)

const anotherSum = sum 
console.log(anotherSum(5, 9))

let x = 3