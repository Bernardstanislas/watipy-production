import React from 'react';

import Home from './Home';
import ApiContext from './ApiContext';
import client from './client';

const App = () => (
    <ApiContext.Provider value={client}>
        <Home />
    </ApiContext.Provider>
);

export default App;
