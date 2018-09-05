import React, { Component } from 'react';

import ApiContext from '../ApiContext';
import Home from "./Home";

class HomeContainer extends Component {
    state = {
        collections: []
    };

    componentDidMount() {
        const { client } = this.props;
        client.collection.fetchAll()
            .then(collections => {
                this.setState({
                    collections
                });
            });
    }

    render() {
        const { collections } = this.state;
        return (
            <Home collections={collections} />
        );
    }
}

export default (props) => (
    <ApiContext.Consumer>
        {client => <HomeContainer {...props} client={client} />}
    </ApiContext.Consumer>
);
