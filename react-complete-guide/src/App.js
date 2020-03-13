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
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I’m a React App</h1>
        <p>This is really working!</p>
        
        {/*<button onClick={this.switchNameHandler.bind(this, 'SwitchNameClick')}>Switch Name</button> 
          Use the arrow function just to see an alternative way of calling a function, and pass an argument
        */}
        <button onClick={() => this.switchNameHandler('Arrow Func! SwitchNameClick')}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this, 'Name3Click()')}
        />
        <Person name="Holdstein" age="38">My Hobbies: Racing</Person>      
      </div>
    )
  }
}
     
export default App;
