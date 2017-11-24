import React, { Component } from 'react';

import Input from './Input';
import List from './List';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {text: 'Buy a nice house'},
                {text: 'Pay off debt'},
                {text: 'Go on vacation'}
            ]
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(text) {
        this.setState( {
            items: [
                ...this.state.items,
                {text: text}
            ]
        } );
        console.log(this.state.items);
    }

    render() {
        return(
            <div>
                <h2>This is the apppzzz</h2>
                <Input handleNewItem={text => this.addItem(text)} />
                <List items={this.state.items}/>
            </div>
        );
    }
}