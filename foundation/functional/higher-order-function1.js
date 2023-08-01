//é uma função que recebe uma outra como argumento, ou uma função que retorna outra função

function run(fn){
   return ` Resultado: ${fn()}`
}

function sayHello(){
    console.log("HELLO")
}

// run(3)  // return = fn is not a function 
// run(sayHello()) // ainda nao da porque sayHello nao retona nada
run(sayHello) // so a referencia

run(function(){
    console.log("run!!!")
})

const result = run(Math.random) // funcao que ja existe
console.log(result)