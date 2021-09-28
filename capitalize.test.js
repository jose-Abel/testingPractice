describe('capitalize function', () => {
    // Arrange
    const capitalize = require('./capitalize');

    test('takes a string as an argument and returns that string with the first character capitalized', () => {
        // Act
        const result = capitalize('hello');
    
        // Assert
        expect(result).toBe('Hello');
    });
});