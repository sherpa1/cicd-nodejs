const { multiply } = require('../app');

test('multiply 2 to 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});