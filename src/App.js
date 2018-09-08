import React from 'react';
import { Provider } from 'mobx-react';

import Home from './Home';
import collectionStore from 'stores/collection.store';

const App = () => (
    <Provider collectionStore={collectionStore}>
        <Home />
    </Provider>
);

export default App;
