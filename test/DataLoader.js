import test from 'ava';
import { DataLoader } from '../dist/index';
// import DataLoader from '../dist/DataLoader';

global.window = {};

test( 'is merging custom options', t => {

    let mockData = {
        data: 'my-data',
        url: 'my-url',
        source: 'my-source',
    }

    let data = new DataLoader( mockData );

    t.deepEqual( data.options, mockData );

} );

test( 'url of resource is generated through function as default gets options.url', t => {
    let data = new DataLoader( {
        url: 'my-url'
    } );

    t.is( data.url(), 'my-url' );
} );

test( 'is grabbing data from url when calling start', async t => {
    let data = new DataLoader( {
        url: 'https://jsonplaceholder.typicode.com/users/1',
    } );

    await data.start().then( function( data ) {
        t.truthy( data.name );
    } );

    t.truthy( data.data.name );
} );

test( 'can retrieve response through success function in start', async t => {
    let data = new DataLoader( {
        url: 'https://jsonplaceholder.typicode.com/users/1',
    } );

    // This does not work
    await new Promise( function( resolve, reject ) {
        data.start( function( data ) {
            resolve( data );
        } );
    } ).then( function( data ) {
        t.truthy( data.name );
    } );

    t.truthy( data.data.name );

} );

test( 'if source data is set use that instead of request url', async t => {

    let mock = {
        key: 'value'
    }

    let data = new DataLoader( {
        url: 'https://jsonplaceholder.typicode.com/users/1',
        source: mock,
    } );

    data.start().then( function( response ) {
        t.deepEqual( response, mock );
        t.deepEqual( data.data, mock );
    } );

} );
// if source is an object use that data

// Is caching data - later
