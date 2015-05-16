'use strict';

var cache = require('memory-cache');

cache.put('api-data:unicorns', {
    unico: {
        id: 'unico',
        name: 'Unico',
        description: 'Unico the magical Unicorn is born with incredible powers that make people happy.',
        powers: ['Makes people happy', 'small?'],
        bestKnown: ['The Fantastic Adventures of Unico', 'Unico in the Island of Magic']
    },
    theLastUnicorn: {
        id: 'theLastUnicorn',
        name: 'The Last Unicorn',
        description: 'A brave unicorn and a magician fight an evil king who is obsessed with attempting to capture the world\'s unicorns.',
        powers: ['Healing', 'Transforms into a young woman'],
        bestKnown: ['The Last Unicorn']
    }
});