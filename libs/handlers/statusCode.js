'use strict';

var Joi = require('joi'),
    Boom = require('boom');

module.exports = {
    get: {
        handler: function(req, reply){
            return reply().code(Number(req.query['statusCode']) || 200);
        },
        description: 'Get status code',
        notes: 'Returns the specified status code',
        tags: ['api', 'statusCodes'],
        validate: {
            query: {
                statusCode: Joi.optional()
            }
        }
    },
    getOne: {
        handler: function(req, reply){
            return reply().code(Number(req.params['statusCode']) || 200);
        },
        description: 'Get status code',
        notes: 'Returns the specified status code',
        tags: ['api', 'statusCodes'],
        validate: {
            params: {
                'statusCode': Joi.required()
                    .description('The identifier for the status code')
            }
        }
    },
    post: {
        handler: function(req, reply){
            return reply().code(Number(req.params['statusCode']) || 201);
        },
        description: 'Create status codes',
        notes: 'Returns the specified status code',
        tags: ['api', 'statusCodes'],
        validate: {
            payload: Joi.object().unknown(true)
        }
    },
    put: {
        handler: function(req, reply){
            return reply().code(Number(req.params['statusCode']) || 201);
        },
        description: 'Put status codes',
        notes: 'Returns the specified status code',
        tags: ['api', 'statusCodes'],
        validate: {
            params: {
                'statusCode': Joi.required()
                    .description('The identifier for the new status code')
            },
            payload: Joi.object().unknown(true)
        }
    },
    delete: {
        handler: function(req, reply){
            return reply().code(Number(req.params['statusCode']) || 204);
        },
        description: 'Delete status codes',
        notes: 'Returns the specified status code',
        tags: ['api', 'statusCodes'],
        validate: {
            params: {
                'statusCode': Joi.required()
                    .description('The identifier for the status code')
            }
        }
    },
    patch: {
        handler: function(req, reply){
            return reply().code(Number(req.params['statusCode']) || 202);
        },
        description: 'Patch status codes',
        notes: 'Returns the specified status code',
        tags: ['api', 'statusCodes'],
        validate: {
            params: {
                'statusCode': Joi.required()
                    .description('The identifier for the status code')
            },
            payload: Joi.object().unknown(true)
        }
    }
};