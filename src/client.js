import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'watipy.myshopify.com',
    storefrontAccessToken: 'ab092d1b47beae0d29511ed79556edb2'
});

export default client;
