import React,{ Component } from "react";

class ErrorBoundary extends Component {
    // Set the state property
    state = {
        hasError: false,
        errorMessage: ''
    }

    // Key Method that is executed whenever a component we wrap with ErrorBoundary that throws an error
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary