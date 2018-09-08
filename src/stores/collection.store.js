import { observable, action } from 'mobx';

import client from 'client';

export class CollectionStore {
    @observable collections = [];
    @observable loading = true;

    constructor(client) {
        this.client = client;
    }

    @action
    async fetchAll() {
        const collections = await this.client.collection.fetchAll();
        this.loading = false;
        this.collections = collections;
    }
}

export default new CollectionStore(client);
