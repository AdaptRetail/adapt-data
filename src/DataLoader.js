// import extend from 'extend';
// import axios from 'axios';
var extend = require( 'extend' );
var axios = require( 'axios' );

// export default function( options ) {
module.exports = function( options ) {
    this.options = extend( true, {
        data: null,
        url: null,
        sourceData: window.DataLoader,
    }, options );

    this.start = function( success ) {

        // sourceData
        if (this.options.sourceData) {
            if (success) {
                success( this.options.sourceData );
            }
            return Promise.resolve( this.options.sourceData );
        }

        // data
        if (this.options.data) {
            if (success) {
                success( this.options.data );
            }
            return Promise.resolve( this.options.data );
        }

        // XHTTP request
        if (this.options.url) {
            return axios.get( this.options.url ).then( function( response ) {
                if (success) {
                    success( response.data );
                }
                return response.data;
            } );
        }

        return Promise.reject('There was not any source data, data or url provided in DataLoader.' );

    }

}
