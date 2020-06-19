import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

// Converted to a Class-Based component for Lifecycle Hook Demo
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElemnentRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElemnentRef.focus()
        this.inputElemnentRef.current.focus()
    }
    
    render () {
       return (
           <Auxiliary>
            {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
            <p key="i1" onClick={this.props.click}>Hi! I'm {this.props.name}. I'm {this.props.age} years old.</p>
            <p key="i2">{this.props.children}</p>
            <input 
                key="i3" 
                ref={this.inputElemnentRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
            />
           </Auxiliary>
        )

    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}
export default withClass(Person, classes.Person);