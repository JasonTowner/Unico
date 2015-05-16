'use strict';

var Joi = require('joi'),
    Boom = require('boom');

var defaultService = require('../services/defaultService');

var apiDataKeyPrefix = 'api-data:';

var getCustomResources = function(req, reply){
    try{
        var paths = req.params['custom'].match(/^(.*[/\\])([^/\\]+?)$/) || req.params['custom'];
        if(Array.isArray(paths)){
            var key = (paths[1] || '').replace(/\/$/, '');
            var id = paths[2] || '';
        } else {
            var key = paths;
            var id = '';
        }
        return reply(defaultService.getCustomResources(apiDataKeyPrefix + key, id));
    } catch(error){
        return reply(Boom.notFound());
    }
};

var getCustomResource = function(req, reply){
    try{
        var paths = req.params['custom'].match(/^(.*[/\\])([^/\\]+?)$/);
        var key = paths[1].replace(/\/$/, "");
        var id = paths[2];
        return reply(defaultService.getCustomResource(apiDataKeyPrefix + key, id));
    } catch(error){
        return reply(Boom.notFound());
    }
};

var createCustomResource = function(req, reply){
    try{
        return reply(defaultService.createCustomResource(apiDataKeyPrefix + req.params['custom'], req.payload)).code(201);
    } catch(error){
        return reply(Boom.serverTimeout());
    }
};

var createCustomResourceWithId = function(req, reply){
    try{
        var paths = req.params['custom'].match(/^(.*[/\\])([^/\\]+?)$/);
        var key = paths[1].replace(/\/$/, "");
        var id = paths[2];
        return reply(defaultService.createCustomResourceWithId(apiDataKeyPrefix + key, id, req.payload)).code(201);
    } catch(error){
        return reply(Boom.serverTimeout());
    }
};

var deleteCustomResource = function(req, reply){
    try{
        var paths = req.params['custom'].match(/^(.*[/\\])([^/\\]+?)$/);
        var key = paths[1].replace(/\/$/, "");
        var id = paths[2];
        return reply(defaultService.deleteCustomResource(apiDataKeyPrefix + key, id)).code(204);
    } catch(error){
        return reply(Boom.notFound());
    }
};

var editCustomResource = function(req, reply){
    try{
        var paths = req.params['custom'].match(/^(.*[/\\])([^/\\]+?)$/);
        var key = paths[1].replace(/\/$/, "");
        var id = paths[2];
        return reply(defaultService.editCustomResource(apiDataKeyPrefix + key, id, req.payload)).code(202);
    } catch(error){
        return reply(Boom.notFound());
    }
};

module.exports = {
    get: {
        handler: getCustomResources,
        description: 'Get custom resources',
        notes: 'Returns a list of all the custom resources in a given resource path',
        tags: ['api', 'custom'],
        validate: {
            params: {
                custom: Joi.required()
                    .description('Your desired resource path')
            }
        }
    },
    getOne: {
        handler: getCustomResource,
        description: 'Get a custom resource',
        notes: 'Returns the specified resource',
        tags: ['api', 'custom'],
        validate: {
            params: {
                custom: Joi.required()
                    .description('Your desired resource path. The last path with be used as the id of the resource to retrieve.')
            }
        }
    },
    post: {
        handler: createCustomResource,
        description: 'Create a custom resource',
        notes: 'Creates a new custom resource in the resource path provided',
        tags: ['api', 'custom'],
        validate: {
            params: {
                custom: Joi.required()
                    .description('Your desired resource path')
            },
            payload: Joi.object().unknown(true)
                    .description('Whatever you want to store')
        }
    },
    put: {
        handler: createCustomResourceWithId,
        description: 'Put a custom resource with the specified id',
        notes: 'Creates a new custom resource and assigns it the id specified in the url',
        tags: ['api', 'custom'],
        validate: {
            params: {
                custom: Joi.required()
                    .description('Your desired resource path. The last path will be uses as the resource\'s id.')
            },
            payload: Joi.object().unknown(true)
                    .description('Whatever you want to store')
        }
    },
    delete: {
        handler: deleteCustomResource,
        description: 'Delete a custom resource',
        notes: 'Removes a specific custom resource',
        tags: ['api', 'custom'],
        validate: {
            params: {
                custom: Joi.required()
                    .description('Your desired resource path. The last path will be used as the id to delete the resource.')
            }
        }
    },
    patch: {
        handler: editCustomResource,
        description: 'Patch a custom resource',
        notes: 'Apply modifications to a resource. this can also change the id, so be ye warned!',
        tags: ['api', 'custom'],
        validate: {
            params: {
                custom: Joi.required()
                    .description('Your desired resource path. The last path will be used as the id to update the resource.')
            },
            payload: Joi.object().unknown(true)
                    .description('Whatever you want to store')
        }
    }
};