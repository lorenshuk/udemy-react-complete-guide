import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state =  {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 24 },
      { name: 'Stephanie', age: 22 }
    ]
  }

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
  
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I’m a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
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
    )
  }
}
     
export default App;
