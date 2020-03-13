import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

//class App extends Component {
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some Other State'
  })
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilus', age: 140 },
        { name: 'Manugiabli', age: 2214 },
        { name: 'Name 3', age: 3 }
      ]
    })
  }

  return (
      <div className="App">
        <h1>Hi, I’m a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this,'Metoo')}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        <Person name="Holdstein" age="38" click={this.switchNameHandler.bind(this,'HoldOffOnThat!!!')}>My Hobbies: Racing</Person>      
      </div>
    );
}
     
export default app;


/*
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilus', age: 140},
        { name: 'Manugiabli', age: 2214},
        { name: 'Stephanie Symuamr', age: 32426}
      ]
    })
  }
*/