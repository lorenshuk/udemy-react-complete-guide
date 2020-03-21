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
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 24 },
      { name: 'Stephanie', age: 22 }
    ],
    username: 'DefaultUsername',
    showPersons: false
  }
  
  /**************** */
  /* EVENT HANDLERS */
  /**************** */
  
  /* Removed in Lesson 53 3/20/20 - Use togglePersonsHandler() */
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 140 },
        { name: 'Manugiabli', age: 2214 },
        { name: 'Stephanie Symuamr', age: 32426 }
      ]
    })
  }
  

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 48 },
        { name: 'Stephanie Rage', age: 99 }
      ]
    })
  }
  
  /* ASSIGNMENT 1: Lesson 50 3/19/20
  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }
  */

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

    if (this.state.showPersons) {
      persons = 
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangeHandler}
          >My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
    }

    return (
      <div className="App">
        <h1>Hi, I’m a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.togglePersonsHandler()}>Switch Name</button>
        {persons}
      </div>
    )
  }
}
     
export default App;
