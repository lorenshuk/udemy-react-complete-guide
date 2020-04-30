import React, { Component} from 'react'
import Person from './Person/Person'

// Convert to Class-Based Component 4/13/20 5:24 PM
class Persons extends Component {
    constructor(props){
        super(props)
        this.state = {
            log: ''
        }
        console.log('[Persons.js] constructor()')
    }
    static getDerivedStateFromProps(props, state) {
        console.log(`[Persons.js] getDerivedStateFromProps(props, state)`)
        return state
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[Persons.js] shouldComponentUpdate()`)

        if (nextProps.persons !== this.props.Persons || 
            nextProps.clicked !== this.props.clicked || 
            nextProps.changed !== this.props.changed
        ) {
            return true
        } else {
            return false
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[Persons.js] getSnapshotBeforeUpdate(prevProps, prevState)`, prevProps)
        return prevState
    }
    componentDidUpdate() {
        console.log(`[Persons.js] componentDidUpdate()`)
    }

    componentWillUnmount() {
        console.log(`[Persons.js] componentWillUnmount()`)
    }

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