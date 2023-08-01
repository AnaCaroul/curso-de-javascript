const number = [1, 2, 3, 4, 5, 6]

const greatThanZero = el => el > 0
const greatThanTen = el => el > 10 
const even = el => el % 2 === 0

// console.log(number.filter(el => el > 0))
console.log(number.filter(greatThanZero))
console.log(number.filter(greatThanTen))
console.log(number.filter(even))


const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const greatStudents = student => student.score >= 9

console.log(students.filter(greatStudents))
