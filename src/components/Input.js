import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleNewItem(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    handleOnChange(text) {
        this.setState({ inputValue: text });
        console.log(this.state.inputValue);
    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input 
                        onChange={event => this.handleOnChange(event.target.value)} 
                        value={this.state.inputValue} 
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}