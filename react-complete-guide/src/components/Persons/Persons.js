import React, { Component} from 'react'
import Person from './Person/Person'

// Convert to Class-Based Component 4/13/20 5:24 PM
class Persons extends Component {
    render() {
        console.log('[Persons.js] rendering...')

        return this.props.persons.map( (person, index) => {
            return <Person
                click={ () => this.props.clicked(index)}
                name={this.props.name}
                age={person.age}
                key={person.id}
                changed={ (event) => this.props.changed(event, person.id)}
            />
        })
    }
}

export default Persons;