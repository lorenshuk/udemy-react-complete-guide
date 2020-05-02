import React, { Component } from 'react';
//import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'

// Converted to a Class-Based component for Lifecycle Hook Demo
class Person extends Component {
    render () {
        /* 
            *** Original Code - Use Root <div> element to wrap sub-elements *** 
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
          
            *** Array Version Here *** 
        console.log('[Person.js] rendering with return[array]...')
        return [
        ];
        */
       
       console.log('[Person.js] rendering with <Auxiliary></Auxiliary>...')
       return (
           <Auxiliary>
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
           </Auxiliary>
        )

    }
};

export default Person;