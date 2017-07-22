import test from 'ava';
import AdaptData from '../dist/index';

global.window = {};

// test.before( t => {
    // global.window = null;
// } )

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

    console.log( data.asset( 'my-image.jpg' ) );

    t.is( 
        data.asset( 'my-image.jpg' ),
        data.url() + 'my-image.jpg'
    );
} );
