import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
/*** ASSIGNMENT 1: Lesson 50 3/19/20
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
***/

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    let buttonText = 'Show Persons'

    if (this.state.showPersons) {
      buttonText = 'Hide Persons';
      persons = 
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click={ () => this.deletePersonHandler(index) }
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={ (event) => this.nameChangeHandler(event, person.id) }
            />
          })}
        </div>
    }

    return (
      <div className="App">
        <h1>Hi, I’m a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.togglePersonsHandler()}>{buttonText}</button>
        {persons}
      </div>
    )
  }
}
     
export default App;
