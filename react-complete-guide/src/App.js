import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

//class App extends Component {
const app = props => {

  //render() {
    return (
      <div className="App">
        <h1>Hi, I’m a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name="Holdstein" age="38">My Hobbies: Racing</Person>
      </div>
    );
  //}
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