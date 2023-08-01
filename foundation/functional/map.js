// map transforma os elementos de um array e retorna em um outro array do mesmo tamanho 

const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)

const numbersV2 = numbers.map( el =>  el * 2 ) // usando um arrow function em apenas uma linha sem o return
// gera um outro array com o dobro de cada elemento

console.log(numbersV2)

// outra forma usando for of
const numbersV3 = []
for(n of numbers){
    numbersV3.push(n * 2)
}

console.log(numbersV3)




const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]
    
const getScore = el => el.score //transformou o elemento em sua nota, ou seja um object em um number

const result = students
.map(getScore)
.map(Math.ceil) // arredonda pra cima ou Math.floor que arredonda pra baixo


console.log(result)


