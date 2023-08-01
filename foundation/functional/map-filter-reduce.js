const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const greatStudent = student => student.score >= 9 
// notas maiores ou igual a 9 

const getScore = el => el.score
// apenas as notas 

const avg = (acc, el, i, array) => {
    if(i === array.length - 1){
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}
// media

console.log(
    students.filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)
// filtra os melhores alunos com notas maiores ou iguais a 9
// depois usa o map para pegar apenas as notas
// em seguida usa o reduce para calcular a media entre as notas que sobraram 
