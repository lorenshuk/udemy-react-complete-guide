import React, { Component } from 'react';
import classesCSS from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons'

class App extends Component {
  state =  {
    persons: [
      { id: 'dq,di',name: 'Max', age: 28 },
      { id: 'doske',name: 'Manu', age: 24 },
      { id: 'nm:9z',name: 'Stephanie', age: 22 }
    ],
    username: 'DefaultUsername',
    showPersons: false
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
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    // Create & edit state.persons
    const personsUpdated = [...this.state.persons]
    personsUpdated[personIndex] = person
    // Update state.persons
    this.setState({persons: personsUpdated})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1) 
    this.setState({persons: persons})
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  /********************* */
  /* Output this bitch! */
  /********************* */
  render() {
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
      <div className={classesCSS.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}      
      </div>
    )
  }
}
     
export default App;