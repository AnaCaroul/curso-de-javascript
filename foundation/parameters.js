function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1,2,3)
logParams(1,2,3,4,5) // executa normal, a linguagem ignora os parametros a mais
logParams(1,2) // 1 2 undefined 
logParams (1) // 1 undefined undefined 


function defultParams (a,b,c = 0){
    console.log(a,b,c)
}// colocar como valor padrao de c caso nao seja passado o valor 
defultParams(7,8,9)
defultParams(7,8)


console.log(1)
console.log(1,2,3,4,5,6,7,8,9,10)


//spread/rest
function LogNums(nums){ //
    for(let n of nums){ // pecorrer array
        console.log(n)
    }
}

LogNums([1, 2, 3, 4, 5, 6])

function LogNums2(...nums){ // os "..." serve para dizer que essa funcao recebe uma quantidade 
    // variavel de parametros que vai ser armazenada dentro da function
    console.log(nums)
}
LogNums2(1,2,3,4,5,6)

// soma dos numeros 

function SumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n 
    }
    return total
}

console.log(SumAll(1,2,3,5))
