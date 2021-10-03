"use strict";
const assert = require('assert');
const { cli } = require('../bin/snipe-cli');
describe('Snipe CLI', () => {
    it('should return Hello World', () => {
        const expected = 'Hello World!';
        const actual = cli('Hello World!');
        assert.equal(actual, expected);
    });
});
