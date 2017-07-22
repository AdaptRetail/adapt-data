var AdaptData = function(options) {


    this.options = {
        dataSource: options.sourceData ? options.sourceData : null,
    },

    this.start = function( success ) {
        var dataSource = this.options.sourceData ? this.options.sourceData : window.adapt_data;

        if (success) {
            success( dataSource );
        }
        return Promise.resolve( dataSource );
    };
    
    this.asset = function( path ) {
        return ad_path + path;
    }
};
module.exports = {
    AdaptData: AdaptData,
}
