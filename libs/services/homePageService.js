'use strict';

var fs = require('fs'),
    path = require('path'),
    request = require('request'),
    cache = require('memory-cache');

var homePageKey = 'home-page';

module.exports.getHomePage = function(callback){
    var homePage = cache.get(homePageKey);
    if(homePage){
        return callback(null, homePage);
    }

    var readme = fs.readFileSync(path.resolve('README.md'), "utf8");
    request({
        url: 'https://api.github.com/markdown/raw',
        method: 'POST',
        headers: {
            'Content-Type': 'text/x-markdown',
            'User-Agent': 'JasonTowner'
        },
        body: readme
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            cache.put(homePageKey, body);
            return callback(null, body);
        } else {
            return callback(error);
        }
    });
};
