'use strict';

var Joi = require('joi'),
    Boom = require('boom');

var defaultService = require('../services/defaultService');

var apiDataKeyPrefix = 'api-data:';

var getCustomResources = function(req, reply){
    try{
        return reply(defaultService.getCustomResources(apiDataKeyPrefix + req.params['youChoose']));
    } catch(error){
        return reply(Boom.notFound());
    }
};

var getCustomResource = function(req, reply){
    try{
        return reply(defaultService.getCustomResource(apiDataKeyPrefix + req.params['youChoose'], req.params['id']));
    } catch(error){
        return reply(Boom.notFound());
    }
};

var createCustomResource = function(req, reply){
    try{
        return reply(defaultService.createCustomResource(apiDataKeyPrefix + req.params['youChoose'], req.payload)).code(201);
    } catch(error){
        return reply(Boom.serverTimeout());
    }
};

var createCustomResourceWithId = function(req, reply){
    try{
        return reply(defaultService.createCustomResourceWithId(apiDataKeyPrefix + req.params['youChoose'], req.params['id'], req.payload)).code(201);
    } catch(error){
        return reply(Boom.serverTimeout());
    }
};

var deleteCustomResource = function(req, reply){
    try{
        return reply(defaultService.deleteCustomResource(apiDataKeyPrefix + req.params['youChoose'], req.params['id'])).code(204);
    } catch(error){
        return reply(Boom.notFound());
    }
};

var editCustomResource = function(req, reply){
    try{
        return reply(defaultService.editCustomResource(apiDataKeyPrefix + req.params['youChoose'], req.params['id'], req.payload)).code(202);
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
                youChoose: Joi.required()
                    .description('Your desired resource')
            }
        }
    },
    getOne: {
        handler: getCustomResource,
        description: 'Get custom resource',
        notes: 'Returns the specified resource',
        tags: ['api', 'custom'],
        validate: {
            params: {
                youChoose: Joi.required()
                    .description('Your desired resource'),
                id: Joi.required()
                    .description('The identifier for the unicorn')
            }
        }
    },
    post: {
        handler: createCustomResource,
        description: 'Create custom resource',
        notes: 'Creates a new custom resource in the resource path provided',
        tags: ['api', 'custom'],
        validate: {
            params: {
                youChoose: Joi.required()
                    .description('Your desired resource')
            },
            payload: Joi.object().unknown(true)
        }
    },
    put: {
        handler: createCustomResourceWithId,
        description: 'Put custom resource',
        notes: 'Creates a new custom resource and assigns it the id specified in the url',
        tags: ['api', 'custom'],
        validate: {
            params: {
                youChoose: Joi.required()
                    .description('Your desired resource'),
                id: Joi.required()
                    .description('The identifier for the new unicorn')
            },
            payload: Joi.object().unknown(true)
        }
    },
    delete: {
        handler: deleteCustomResource,
        description: 'Delete custom resource',
        notes: 'Removes a specific custom resource',
        tags: ['api', 'custom'],
        validate: {
            params: {
                youChoose: Joi.required()
                    .description('Your desired resource'),
                id: Joi.required()
                    .description('The identifier for the unicorn')
            }
        }
    },
    patch: {
        handler: editCustomResource,
        description: 'Patch custom resource',
        notes: 'Apply modifications to a resource. this can also change the id, so be ye warned!',
        tags: ['api', 'custom'],
        validate: {
            params: {
                youChoose: Joi.required()
                    .description('Your desired resource'),
                id: Joi.required()
                    .description('The identifier for the unicorn')
            },
            payload: Joi.object().unknown(true)
        }
    }
};