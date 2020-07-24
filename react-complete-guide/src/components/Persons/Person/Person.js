import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

// Converted to a Class-Based component for Lifecycle Hook Demo
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElemnentRef = React.createRef();
    }

    static contextType = AuthContext

    componentDidMount() {
        // this.inputElemnentRef.focus()
        this.inputElemnentRef.current.focus()
        // Lesson 114: Using "contextType"
        console.log(this.context.authenticated)
    }
    
    render () {
       return (
           <Auxiliary>
           
            {/* Lesson 114: Use contextType, instead of the AuthContext.Consumer component directly
                <AuthContext.Consumer>
                    { (context) => 
                        this.props.isAuth ? <p>Authenticated</p> : <p>Please Log in</p>
                    }
                </AuthContext.Consumer>
            */}
            {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}

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