import React from 'react'
import Person from './Person/Person'

const persons = (props) => {
    console.log('[Persons.js] executed: Line 1')

    return props.persons.map( (person, index) => {
        return <Person
            click={ () => props.clicked(index)}
            name={props.name}
            age={person.age}
            key={person.id}
            changed={ (event) => props.changed(event, person.id)}
        />
    })
}

export default persons;