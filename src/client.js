import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: `${process.env.REACT_APP_SHOPIFY_DOMAIN}.myshopify.com`,
    storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN
});

export default client;
