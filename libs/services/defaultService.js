'use strict';

var cache = require('memory-cache'),
    _ = require('lodash'),
    uuid = require('uuid');

var getCustomResources = function (key) {
    var resources = cache.get(key)
    var resourcesArray = [];
    for (var prop in resources) {
        resourcesArray.push(resources[prop]);
    }
    return resourcesArray;
};

var getCustomResource = function (key, id) {
    return (cache.get(key) || {})[id];
};

var createCustomResource = function (key, customResource) {
    customResource.id = uuid.v4();
    var resources = (cache.get(key) || {});
    resources[customResource.id] = customResource;
    return cache.put(key, resources);
};

var createCustomResourceWithId = function (key, id, customResource) {
    customResource.id = id;
    var resources = (cache.get(key) || {});
    resources[id] = customResource;
    return cache.put(key, resources);
};

var deleteCustomResource = function (key, id) {
    var resources = cache.get(key);
    if (!resources) {
        throw new Error('Resource with key: ' + key + ' Not found to delete id: ' + id);
    }

    // Unicorns can never be killed/deleted! When they die they just come back to life in 30 seconds!
    if(key === 'unicorns'){
        var unicornResurrectionWaitTime = 30000;
        var copy = JSON.parse(JSON.stringify(resources[id]));
        setTimeout(function(){
            resources[id] = copy;
            cache.put(key, resources)
        }, unicornResurrectionWaitTime);
    }
    delete resources[id];
    return cache.put(key, resources);
};

var editCustomResource = function (key, id, customResource) {
    var resources = cache.get(key);
    if (!resources) {
        throw new Error('Resource with key: ' + key + ' not found to patch id: ' + id);
    }
    var resource = resources[id];
    resource = _.merge(resource, customResource, function (a, b) {
        if (Array.isArray(a)) {
            return b;
        }
    });

    resources[resource.id] = resource;

    // Allows changing of id as well - be ye warned!
    return cache.put(key, resources);
};

module.exports = {
    getCustomResources: getCustomResources,
    getCustomResource: getCustomResource,
    createCustomResource: createCustomResource,
    createCustomResourceWithId: createCustomResourceWithId,
    deleteCustomResource: deleteCustomResource,
    editCustomResource: editCustomResource
};