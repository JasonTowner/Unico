'use strict';

var defaultHandler = require('./handlers/default'),
    unicornHandler = require('./handlers/unicorn'),
    mockedHandler = require('./handlers/mocked'),
    statusCodeHandler = require('./handlers/statusCode');

var routes = [
    // Unicorns
    {method: 'GET', path: '/api/unicorns', config: unicornHandler.get},
    {method: 'GET', path: '/api/unicorns/{id}', config: unicornHandler.getOne},
    {method: 'POST', path: '/api/unicorns', config: unicornHandler.post},
    {method: 'PUT', path: '/api/unicorns/{id}', config: unicornHandler.put},
    {method: 'DELETE', path: '/api/unicorns/{id}', config: unicornHandler.delete},
    {method: 'PATCH', path: '/api/unicorns/{id}', config: unicornHandler.patch},

    // Mocked response
    {method: 'GET', path: '/api/mocked', config: mockedHandler.get},
    {method: 'GET', path: '/api/mocked/{id}', config: mockedHandler.getOne},
    {method: 'POST', path: '/api/mocked', config: mockedHandler.post},
    {method: 'PUT', path: '/api/mocked/{id}', config: mockedHandler.put},
    {method: 'DELETE', path: '/api/mocked/{id}', config: mockedHandler.delete},
    {method: 'PATCH', path: '/api/mocked/{id}', config: mockedHandler.patch},

    // Mocked status code
    {method: 'GET', path: '/api/status-code', config: statusCodeHandler.get},
    {method: 'GET', path: '/api/status-code/{statusCode}', config: statusCodeHandler.getOne},
    {method: 'POST', path: '/api/status-code', config: statusCodeHandler.post},
    {method: 'PUT', path: '/api/status-code/{statusCode}', config: statusCodeHandler.put},
    {method: 'DELETE', path: '/api/status-code/{statusCode}', config: statusCodeHandler.delete},
    {method: 'PATCH', path: '/api/status-code/{statusCode}', config: statusCodeHandler.patch},

    // Wildcarded
    {method: 'GET', path: '/api/{youChoose}', config: defaultHandler.get},
    {method: 'GET', path: '/api/{youChoose}/{id}', config: defaultHandler.getOne},
    {method: 'POST', path: '/api/{youChoose}', config: defaultHandler.post},
    {method: 'PUT', path: '/api/{youChoose}/{id}', config: defaultHandler.put},
    {method: 'DELETE', path: '/api/{youChoose}/{id}', config: defaultHandler.delete},
    {method: 'PATCH', path: '/api/{youChoose}/{id}', config: defaultHandler.patch}
];

module.exports = routes;