const stringLength = require('./stringLength');

test('returns the character count of the string pass as argument', () => {
    expect(stringLength("hello")).toBe(5);
});