# @adapt-retail/adapt-data

> JavaScript api for communicating with Adapt `api`.

## Install

### NPM
```bash
npm install @adapt-retail/adapt-data
```

### YARN
```bash
yarn add @adapt-retail/adapt-data
```

## API

### Create object

Provide the adapt data when creating the AdaptData.

> Note: When creating your first Adapt `Banner` or `InstoreTV`
> We recommend that you use a `collection` production instead of a `Banner` or `InstoreTV` production.
> This is because you cannot generate preview of a `Banner` or `InstoreTV` production that do not have template assign to it.
> And usually you do not have that when creating your `Adapt Template`.

```js
var adapt = new AdaptData({
    account: 'priceco58c12436f20b4', // Account key
    project: 1, // Project ID
    campaign: 1, // Campaign ID
    production: 1, // Production ID
    source: null, // optional 
});
```

#### Set custom datasource

Setting the source property of the Adapt data will overwrite any data requested by api.
This is nice for developing when you are offline
```js
var adapt = new AdaptData({
    source: {
        data: [
            {
                id: 1234,
                name: 'Product',
                price: 199
            }
        ]
    } 
});
```

### Start

After setting up the object, you can call `.start` to start retrieving the content.

```js
var adapt = new AdaptData({ ... });

// Via promise
adapt.start().then( function( adapt_data ) {
    ... Adapt data is loaded and ready ...
} );

// Via function parameter
adapt.start( function( adapt_data ) {
    ... Adapt data is loaded and ready ...
} );
```

### Asset

Get the asset in the adapt folder

```js
adapt.start( function( adapt_data ) {
    adapt.asset( 'my-image.png' );
} );
```

## LightAdaptData

Light adapt data is a super light version for adapt data.
It cannot request data from external source, but it can read `source`.

> This class is meant for [Adapt banner productions](https://adaptretail.com).

When using webpack you can set this setting when running production script.
```js
if (process.env.NODE_ENV === 'production') {
  module.exports.resolve = {
      alias: {
        '@adapt-retail/adapt-data': '@adapt-retail/adapt-data/dist/LightAdaptData.js',
      }
  };
}
```
