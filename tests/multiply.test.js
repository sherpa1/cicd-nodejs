const { multiply } = require('../app');
const { test, expect } = require('jest');

test('multiply 2 to 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});