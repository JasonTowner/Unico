'use strict';

var Hapi = require('hapi');

// Init stuffs
require('./init');

var routes = require('./libs/routes');

// Get config values
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 1337;

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: host,
    port: port
});

// Add the routes
server.route(routes);

var goodOptions = {
    opsInterval: 1000,
    reporters: [{
        reporter: require('good-console'),
        events: {
            response: '*',
            log: '*'
        }
    }]
};

// Add plugins
var plugins = [
    {
        register: require('good'),
        options: goodOptions
    },
    {
        register: require('hapi-swagger')
    }
];

// Start the server
console.log('info', 'Registering plugins...');
server.register(plugins, function(err){
    if(err){
        console.log('Something bad happened while registering plugins. Exiting...');
        throw err;
    }

    server.start(function(){
        console.log('info', 'UNICO API started at: ' + server.info.uri);
    });
});
