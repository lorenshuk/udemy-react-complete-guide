// var myName = 'max'
// let myName = 'john '
// console.log(myName)

// Lesson 14: Arrow Functions
function oldFx() {
    console.log('This is the normal fx declare')
}

// Arrow Fx
const arrowFx = (name = 'default') => {
    //console.log(`This is an arrow fx: ${name}`)
}

arrowFx('Beezil')

// Lesson 16
class Human {
    constructor() {
        //this.gender = 'male'
    }
    gender = 'male'
}

class Person extends Human {
    constructor(name, gender) {
        super()
        this.name = name
        this.gender = gender
    }

    name = '(not entered yet)'

    printMe() {
        console.log(`My name is ${this.name}. I am a ${this.gender}.`)
    }
}

let newPerson = new Person('Billie', 'female')
newPerson.printMe()