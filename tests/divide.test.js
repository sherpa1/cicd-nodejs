const { divide } = require('../app');

test('divide 10 to 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});