const numbers = [1, 2, 3, 4, 5, 6]

const sum =  (total, el) => total + el
const total = numbers.reduce(sum, 100) // o "100" seria o valor inicial

console.log(total)

const avg = (acc, el, i, array) => { // acc é o acumulador, i o indice, array o proprio array
    if( i === array.length - 1){
        return (acc + el) / array.length
    }else {
        return acc + el
    }
}

const resultado = numbers.reduce(avg)
console.log(resultado)


