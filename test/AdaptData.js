import test from 'ava';
import AdaptData from '../dist/index';

global.window = {};

test( 'is setting full path when adding account options', t => {

    let data = new AdaptData( {
        account: 'account',
        project: 'project',
        campaign: 'campaign',
        production: 'production',
        source: null,
    } )

    t.is( 
        data.url(),
        'https://cdn.adaptretail.com/account/project/project/campaign/campaign/production/production/live/'
    );

} );

test( 'can get asset from folder', t => {
    let data = new AdaptData( {
        account: 'account',
        project: 'project',
        campaign: 'campaign',
        production: 'production',
        source: null,
    } );

    t.is( 
        data.asset( 'my-image.jpg' ),
        data.url() + 'my-image.jpg'
    );
} );

test( 'is getting data from adapt_data if it exists', async t => {

    let mock = {
        data: {
            key: 'value',
        }
    };

    window.adapt_data = mock;

    let data = new AdaptData( {
        url: 'https://jsonplaceholder.typicode.com/users/1',
    } );

    await data.start().then( function( data ) {
        t.deepEqual( data, mock );
    } );

} );

test( 'can set custom data source', async t => {
    let mock = {
        data: {
            key: 'value',
        }
    };

    let data = new AdaptData( {
        source: mock,
    } );

    await data.start().then( function( data ) {
        t.deepEqual( data, mock );
    } );
} )

// If production_path is set use that to build the url

// Get methods that uses dot syntax as laravel

// Get adapt settings
// Can set preview or live database
//
// Can use get to retrieve adapt data
// Can ask for an array of objects instead of object with objects
