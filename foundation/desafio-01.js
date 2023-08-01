// I do

function rangeM(a,b,c) {
    let result = []
    for (let i = 0; i <= a; i++) {
        result.push(i)
    }
    console.log(result)

    let result2 = []
    for (let i = a; i <= b ; i++){
        result2.push(i)
    }
    console.log(result2)

    let result3 = []
    for (let i = a; i <= c ; i = i + b){
        result3.push(i)
    }
    console.log(result3)

    
}

//console.log(rangeM(10,20,40)) 


// exercico resolvido

function range (a,b,s = 1){
    const n1 = b === undefined ? 1 : a // se for undefined fica 1 se nao for fica a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

    const nums = []
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step){
        nums.push(i)
    }
    return nums 

}
console.log(range(5))
console.log(range(6,11))
console.log(range(10,19,2))
console.log(range(6,2))
console.log(range(8,-3,4))

