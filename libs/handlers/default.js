'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    cache = require('memory-cache'),
    _ = require('lodash'),
    uuid = require('uuid');

var defaultService = require('../services/defaultService');

var getCustomResources = function(req, reply){
    //var resources = cache.get(req.params['youChoose'])
    //var resourcesArray = [];
    //for(var prop in resources){
    //    resourcesArray.push(resources[prop]);
    //}
    //return reply(resourcesArray);


    try{
        return reply(defaultService.getCustomResources(req.params['youChoose']));
    } catch(error){
        return reply(Boom.notFound());
    }
};

var getCustomResource = function(req, reply){
    //return reply((cache.get(req.params['youChoose']) || {})[req.params['id']]);

    try{
        return reply(defaultService.getCustomResource(req.params['youChoose'], req.params['id']));
    } catch(error){
        return reply(Boom.notFound());
    }
};

var createCustomResource = function(req, reply){
    //req.payload.id = uuid.v4();
    //var resources = (cache.get(req.params['youChoose']) || {});
    //resources[req.payload.id] = req.payload;
    //return reply(cache.put(req.params['youChoose'], resources)).code(201);

    try{
        return reply(defaultService.createCustomResource(req.params['youChoose'], req.payload)).code(201);
    } catch(error){
        return reply(Boom.serverTimeout());
    }
};

var createCustomResourceWithId = function(req, reply){
    //req.payload.id = req.params['id'];
    //var resources = (cache.get(req.params['youChoose']) || {});
    //resources[req.payload.id] = req.payload;
    //return reply(cache.put(req.params['youChoose'], resources)).code(201);

    try{
        return reply(defaultService.createCustomResourceWithId(req.params['youChoose'], req.params['id'], req.payload)).code(201);
    } catch(error){
        return reply(Boom.serverTimeout());
    }
};

var deleteCustomResource = function(req, reply){
    //var resources = cache.get(req.params['youChoose']);
    //if(!resources){
    //    return reply(Boom.notFound());
    //}
    //delete resources[req.params['id']];
    //return reply(cache.put(req.params['youChoose'], resources)).code(204);

    try{
        return reply(defaultService.deleteCustomResource(req.params['youChoose'], req.params['id'])).code(204);
    } catch(error){
        return reply(Boom.notFound());
    }
};

var editCustomResource = function(req, reply){
    //var resources = cache.get(req.params['youChoose']);
    //if(!resources){
    //    return reply(Boom.notFound());
    //}
    //var resource = resources[req.params['id']];
    //resource = _.merge(resource, req.payload, function (a, b) {
    //    if (Array.isArray(a)) {
    //        return b;
    //    }
    //});
    //
    //resources[resource.id] = resource;
    //
    //// Allows changing of id as well - be ye warned!
    //return reply(cache.put(req.params['youChoose'], resources)).code(202);

    try{
        return reply(defaultService.editCustomResource(req.params['youChoose'], req.params['id'], req.payload)).code(202);
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