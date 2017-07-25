// import extend from 'extend';
// var DataLoader = require( './DataLoader' );
// var extend = require( 'extend' );

import DataLoader from './DataLoader';
import extend from 'extend';

export default class extends DataLoader {

    constructor( options ) {
        var options = extend( true, {
            account: '',
            project: null,
            campaign: null,
            production: null,

            source: window.adapt_data,
        }, options );

        super( options );
    }

    url() {
        return this.asset( 'data.json' );
    }

    asset( path ) {
        return 'https://cdn.adaptretail.com/' + this.options.account
                + '/project/' + this.options.project
                + '/campaign/' + this.options.campaign
                + '/production/' + this.options.production
                + '/live/' + path;
    }

}
