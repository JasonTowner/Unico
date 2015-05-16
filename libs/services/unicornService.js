'use strict';

var Joi = require('joi'),
    Boom = require('boom');

module.exports = {
    get: {
        handler: function(req, reply){
            return reply('SOME UNICORNS!!!!');
        },
        description: 'Get unicorns',
        notes: 'Returns a list of all the unicorns currently in existence',
        tags: ['api', 'unicorns']
    },
    getOne: {
        handler: function(req, reply){
            return reply('A UNICORN!!!!');
        },
        description: 'Get unicorn',
        notes: 'Returns the specified unicorn',
        tags: ['api', 'unicorns'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the unicorn')
            }
        }
    },
    giveMeOne: {
        handler: function(req, reply){
            return reply('YOUR UNICORN, DELIVERED!!!!');
        },
        description: 'Get unicorn delivered to you',
        notes: 'Delivers the specified unicorn to your front door',
        tags: ['api', 'unicorns'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the unicorn')
            }
        }
    },
    post: {
        handler: function(req, reply){
            return reply('CREATED UNICORNS!!!!').code(201);
        },
        description: 'Create unicorns',
        notes: 'Creates a new unicorn somewhere in the known/unknown universe - maybe the Marvel Cinematic Universe?',
        tags: ['api', 'unicorns'],
        validate: {
            payload: Joi.object().unknown(true)
        }
    },
    put: {
        handler: function(req, reply){
            return reply('PUTTED UNICORNS!!!!').code(201);
        },
        description: 'Put unicorns',
        notes: 'Creates a new unicorn and assigns it the identification in the url',
        tags: ['api', 'unicorns'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the new unicorn')
            },
            payload: Joi.object().unknown(true)
        }
    },
    delete: {
        handler: function(req, reply){
            return reply('DELETED UNICORNS!!!!').code(204);
        },
        description: 'Delete unicorns',
        notes: 'Removes [read KILLS!] a specific unicorn from existence - why would you ever do this?!',
        tags: ['api', 'unicorns'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the unicorn')
            },
            payload: Joi.object().unknown(true)
        }
    },
    patch: {
        handler: function(req, reply){
            return reply('PATCHED UNICORNS!!!!').code(202);
        },
        description: 'Patch unicorns',
        notes: 'Apply modifications, preferably upgrades, to an existing unicorn',
        tags: ['api', 'unicorns'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the unicorn')
            },
            payload: Joi.object().unknown(true)
        }
    }
};