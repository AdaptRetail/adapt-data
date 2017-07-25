export default class {
    constructor( options ) {
        this.options = {
            // Set the default datasource
            source: options.source ? options.source : window.adapt_data,
        }
    }

    start( success ) {
        if (success) {
            success( this.options.source );
        }
        return Promise.resolve( this.options.source );
    }

    asset( path ) {
        return window.ad_path + path;
    }
}
