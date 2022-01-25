const config = require('./webpack.config.js');

config.devServer = { 
    historyApiFallback: true, //serve a previous page on 404 error
    port: 8080,
    liveReload: true, //refresh the brwoser when changes are saved
    open: true, //open the project in the browser when the server starts 
};

config.devtool = 'inline-source-map';
//a tool to find errors in the compiled code 

module.exports = config;