// import extend from 'extend';
// import axios from 'axios';
var extend = require( 'extend' );
var axios = require( 'axios' );

export default class {


    constructor( options ) {

        this.options = {
            data: null,
            url: null,
            source: window.DataLoader,
        };
        this.options = extend( true, this.options, options );
        this.data = null;

    }

    url() {

        return this.options.url;

    }

    start( success ) {

        // source
        if (this.options.source) {
            if (success) {
                success( this.options.source );
            }
            this.data = this.options.source;
            return Promise.resolve( this.options.source );
        }

        // data
        if (this.options.data) {
            if (success) {
                success( this.options.data );
            }
            this.data = this.options.data;
            return Promise.resolve( this.options.data );
        }

        // XHTTP request
        if (this.url()) {
            return axios.get( this.url() ).then( function( response ) {
                if (success) {
                    success( response.data );
                }
                this.data = response.data;
                return response.data;
            }.bind( this ) );
        }

        return Promise.reject('There was not any source data, data or url provided in DataLoader.' );

    }

}
