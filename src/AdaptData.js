// import extend from 'extend';
var DataLoader = require( './DataLoader' );
var extend = require( 'extend' );

// import jsonp from 'jsonp';
module.exports = function( options ) {
    DataLoader.call( this );

    this.options = extend( true, {
        account: '',
        project: null,
        campaign: null,
        production: null,

        sourceData: window.adapt_data,
    }, options );

    this.asset = function( path ) {
        var returnString = 'https://cdn.adaptretail.com/' + this.options.account
                + '/project/' + this.options.project
                + '/campaign/' + this.options.campaign
                + '/production/' + this.options.production
                + '/live/' + path;
        return returnString;
    }

    this.options.url = this.asset( 'data.json' );


    // Inherit from parent

    this.setting = function( prop ) {
        if (prop == 'ad_path') {
            return this.folder();
        }
        return this.settings[prop];
    }

    this.folder = function( path ) {
        var folder = this.options.url.replace( /^(.+)\/data.json/, '$1' );
        if (path) {
            return folder + '/' + path;
        }
        else {
            return folder;
        }
    }
}
