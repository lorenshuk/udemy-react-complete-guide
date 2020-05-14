import React, { Component } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

// Converted to a Class-Based component for Lifecycle Hook Demo
class Person extends Component {
    render () {
       console.log('[Person.js] rendering with <Auxiliary></Auxiliary>...')
   
       return (
           <Auxiliary>
            <p key="i1" onClick={this.props.click}>Hi! I'm {this.props.name}. I'm {this.props.age} years old.</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
           </Auxiliary>
        )

    }
};

export default withClass(Person, classes.Person);