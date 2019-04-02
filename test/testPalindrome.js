let is_palindrome = require('../src/components/palindrome.js')
var assert = require('assert');

describe('Palindrome check', () => {
    it('"Kobyła ma mały bok" should be true', () => {
        const value = "Kobyła ma mały bok";
        const result = is_palindrome(value);

        assert.equal(true, result);
    });

    it('"Samochód" should be false', () => {
        const value = "Samochód";
        const result = is_palindrome(value);

        assert.equal(false, result);
    });
});
  