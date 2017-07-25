import test from 'ava';
import { LightAdaptData as AdaptData } from '../dist/index';

global.production_path = "https://cdn.adaptretail.com/priceco58c12436f20b4/project/1/campaign/1/production/1/live";
global.adapt_data = {
    data: {
        key: 'value'
    }
};

global.window = {
    production_path: production_path,
    adapt_data: adapt_data,
    ad_path: production_path + '/',
}

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
        production_path + '/' + 'my-image.jpg'
    );
} );

// can get data from data source
test( 'can get data from data source', t => {
    let data = new AdaptData( {
        account: 'account',
        project: 'project',
        campaign: 'campaign',
        production: 'production',
        source: null,
    } );

    t.deepEqual( data.options.source, window.adapt_data );
} )
// can set default data source
