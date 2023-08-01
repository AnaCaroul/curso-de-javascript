//Retonar funcao atraves de uma funcao, voce consegue atraves dela passar os parametros parcialmente 
// Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um 
// único argumento e retorna outra função curried. Por exemplo, uma função que recebe três argumentos, ao sofrer 
// currying, resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento, que por sua 
// vez retorna uma função que recebe um argumento e retorna o resultado da função original.

function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
}

const nycPrice = finalPrice(0.0875) // fica com o imposto fixo


console.log(finalPrice(0.0875) (25.1))
console.log(finalPrice(0.0875) (21.7))
console.log(finalPrice(0.0875) (107.9))

console.log(nycPrice(107.9)) // imposto ja informado nao e necessario passar o imposto denovo

// teste
function primeiroGrau(a, b, x) {
    return a * x + b;
}

function primeiroGrau(a){
    return function(b){
        return function(x){
            return a * x * b
        }
    }
}

const number1 = primeiroGrau(3)
const number2 = number1(2)


console.log(number2(42))
