import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Home from "./Home";

@inject('collectionStore')
@observer
class HomeContainer extends Component {
    componentWillMount() {
        this.props.collectionStore.fetchAll();
    }

    render() {
        const { collectionStore, ...otherProps } = this.props;
        return <Home {...otherProps} collections={collectionStore.collections} />;
    }
}

export default HomeContainer;
