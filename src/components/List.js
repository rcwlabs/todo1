import React, { Component } from 'react';

import ListItem from './ListItem';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const myList = this.props.items.map((item, index) => {
            return <ListItem key={index} text={item.text} />
        });

        return(
            <div>
                {myList}
            </div>
        );
    }
}