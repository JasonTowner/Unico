'use strict';

var Joi = require('joi');

var defaultHandler = require('./default');

module.exports = {
    get: {
        handler: function (req, reply) {
            req.params['youChoose'] = 'unicorns';
            return defaultHandler.get.handler(req, reply);
        },
        description: 'Get unicorns',
        notes: 'Returns a list of all the unicorns currently in existence',
        tags: ['api', 'unicorns']
    },
    getOne: {
        handler: function (req, reply) {
            req.params['youChoose'] = 'unicorns';
            return defaultHandler.getOne.handler(req, reply);
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
    post: {
        handler: function (req, reply) {
            req.params['youChoose'] = 'unicorns';
            return defaultHandler.post.handler(req, reply);
        },
        description: 'Create unicorns',
        notes: 'Creates a new unicorn somewhere in the known/unknown universe - maybe the Marvel Cinematic Universe?',
        tags: ['api', 'unicorns'],
        validate: {
            payload: Joi.object().unknown(true)
        }
    },
    put: {
        handler: function (req, reply) {
            req.params['youChoose'] = 'unicorns';
            return defaultHandler.put.handler(req, reply);
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
        handler: function (req, reply) {
            req.params['youChoose'] = 'unicorns';
            return defaultHandler.delete.handler(req, reply);
        },
        description: 'Delete unicorns',
        notes: 'Removes [read KILLS!] a specific unicorn from existence - why would you ever do this?! Don\'t worry, unicorns come back to life in 30 seconds.',
        tags: ['api', 'unicorns'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the unicorn')
            }
        }
    },
    patch: {
        handler: function (req, reply) {
            req.params['youChoose'] = 'unicorns';
            return defaultHandler.patch.handler(req, reply);
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