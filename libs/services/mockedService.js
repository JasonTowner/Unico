'use strict';

var Joi = require('joi'),
    Boom = require('boom');

module.exports = {
    get: {
        handler: function(req, reply){
            return reply([req.query['data']]).code(req.query['statusCode'] || 200);
        },
        description: 'Get Mock',
        notes: 'Get a mocked response with a desired status code or 200. the "data" query string param must be valid JSON.',
        tags: ['api', 'mocks'],
        validate: {
            query: {
                data: Joi.object().unknown(true),
                statusCode: Joi.number()
            }
        }
    },
    getOne: {
        handler: function(req, reply){
            return reply(req.query['data']).code(req.query['statusCode'] || 200);
        },
        description: 'Get Mock',
        notes: 'Get a mocked response with a desired status code or 200. the "data" query string param must be valid JSON.',
        tags: ['api', 'mocks'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the mock')
            },
            query: {
                data: Joi.object().unknown(true),
                statusCode: Joi.number()
            }
        }
    },
    post: {
        handler: function(req, reply){
            return reply(req.query['data']).code(req.query['statusCode'] || 201);
        },
        description: 'Create Mock',
        notes: 'Get a mocked response with a desired status code or 201. the "data" query string param must be valid JSON.',
        tags: ['api', 'mocks'],
        validate: {
            payload: Joi.object().unknown(true),
            query: {
                data: Joi.object().unknown(true),
                statusCode: Joi.number()
            }
        }
    },
    put: {
        handler: function(req, reply){
            return reply(req.query['data']).code(req.query['statusCode'] || 201);
        },
        description: 'Put Mock',
        notes: 'Get a mocked response with a desired status code or 201. the "data" query string param must be valid JSON.',
        tags: ['api', 'mocks'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the new mock')
            },
            payload: Joi.object().unknown(true),
            query: {
                data: Joi.object().unknown(true),
                statusCode: Joi.number()
            }
        }
    },
    delete: {
        handler: function(req, reply){
            return reply(req.query['data']).code(req.query['statusCode'] || 204);
        },
        description: 'Delete Mock',
        notes: 'Get a mocked response with a desired status code or 202. the "data" query string param must be valid JSON.',
        tags: ['api', 'mocks'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the mock')
            },
            query: {
                data: Joi.object().unknown(true),
                statusCode: Joi.number()
            }
        }
    },
    patch: {
        handler: function(req, reply){
            return reply(req.query['data']).code(req.query['statusCode'] || 202);
        },
        description: 'Patch Mock',
        notes: 'Get a mocked response with a desired status code or 202. the "data" query string param must be valid JSON.',
        tags: ['api', 'mocks'],
        validate: {
            params: {
                id: Joi.required()
                    .description('The identifier for the mock')
            },
            payload: Joi.object().unknown(true),
            query: {
                data: Joi.object().unknown(true),
                statusCode: Joi.number()
            }
        }
    }
};