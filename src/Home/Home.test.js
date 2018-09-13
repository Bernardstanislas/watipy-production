import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import HomeContainer from './Home.container';

describe('The Home container', () => {
    it('calls the collections fetching when mounting', () => {
        const mockedFetchAll = sinon.spy();

        mount(
            <Provider collectionStore={{ fetchAll: mockedFetchAll, collections: [] }}>
                <HomeContainer />
            </Provider>
        );

        expect(mockedFetchAll.callCount).toEqual(1);
    })
})
