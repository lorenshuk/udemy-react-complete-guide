// var myName = 'max'
// let myName = 'john '
// console.log(myName)

// Lesson 14: Arrow Functions
// function oldFx() {
//     console.log('This is the normal fx declare')
// }

// // Arrow Fx
// const arrowFx = (name = 'default') => {
//     //console.log(`This is an arrow fx: ${name}`)
// }

// arrowFx('Beezil')

// // Lesson 16
// class Human {
//     constructor() {
//         //this.gender = 'male'
//     }
//     gender = 'male'
// }

// class Person extends Human {
//     constructor(name, gender) {
//         super()
//         this.name = name
//         this.gender = gender
//     }

//     name = '(not entered yet)'

//     printMe = () => {
//         console.log(`My name is ${this.name}. I am a ${this.gender}.`)
//     }
// }

// let newPerson = new Person('Billie', 'female')
// newPerson.printMe()

    // Lesson 18: Spreads & Rest Operators
/* Spread Example */
// const numbers = [1, 2, 3]
// const newNumbers = [...numbers, 4]
// console.log(newNumbers)

// const person = {
//     name: 'Max'
// }
// const newPerson = {
//     ...person,
//     age:28
// }
// console.log(newPerson)

// /* Rest Example */
// const filter = (...args) => {
//     return args.sort()
// }

// console.log(filter(1,32,2,353,23,34,69,4029,32,23))

    // Lesson 19: Desstructuring
// const numbers = [1, 2, 3]
// let [num1, num2] = numbers
// console.log(num1, num2)

// const Person = {
//     name: 'Max',
//     age: 99
// }
// let {name} = Person
// let person2 = {...Person}
// person2.name = `Ha ha! You're name is gone`
// console.log(Person.name)

let numArray = [1, 32, 35, 692, -11]
let numDoubles = numArray.map(num => num*2)
numDoubles.splice(2, 0, 'Added')
console.log('Doubles: ' + numDoubles)