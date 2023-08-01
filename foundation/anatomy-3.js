// function expression
const increment1 = function(n){
    return n + 1
}

// arrow function is always anonymous 
const increment2 = (n) => {
    return n + 1
}

console.log(increment1(1))
console.log(increment2(5))


const increment3 = n => {
    return n + 1
} // quando tem um unico parametro vc pode tirar os ()

console.log(increment3(7))

const increment4 = n => n + 1 // quando vc tem uma arrow function e essa funcao n tem um corpo, n tem um par de chaves, tem apenas uma linha de code e td dessa linha sera retornado automaticamente, ou seja, n precisa do "return"

console.log(increment4(99))


const sum = (a, b) => a + b 
console.log(sum(9, 8))
