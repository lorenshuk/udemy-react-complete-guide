import React, { Component } from 'react';
import classesCSS from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons'
import WithClass from '../hoc/WithClass'

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`[App.js] constructor(): appTitle:${props.appTitle}`)
  }

  state = {
    persons: [
      { id: 'dq,di', name: 'Max', age: 28 },
      { id: 'doske', name: 'Manu', age: 24 },
      { id: 'nm:9z', name: 'Stephanie', age: 22 }
    ],
    username: 'DefaultUsername',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps()')
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  /**************** */
  /* EVENT HANDLERS */
  /**************** */

  /* Removed "switchNameHandler" in Lesson 53 3/20/20 - Use togglePersonsHandler() */
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    // Copy & edit target person
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    // Create & edit state.persons
    const personsUpdated = [...this.state.persons]
    personsUpdated[personIndex] = person
    // Update state.persons
    this.setState({ persons: personsUpdated })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  /********************* */
  /* Output this bitch! */
  /********************* */
  render() {
    console.log(`[App.js] render()`)

    let persons = null

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      
      <WithClass classes={classesCSS.App}>
        <button onClick={() => {
            this.setState({showCockpit: !this.state.showCockpit});
        }}>
          Remove Cockpit
        </button>
        
        {this.state.showCockpit ? 
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null 
        }
        {persons}
      </WithClass>
    )
  }
}

export default App;