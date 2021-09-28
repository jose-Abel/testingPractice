describe('reverseString function', () => {
    // Arrange
    const reverseString = require('./reverseString');

    test('takes a string as argument and returns it reversed', () => {
        // Act
        const result = reverseString("hello");
    
        // Assert
        expect(result).toBe('olleh');
    });

    test('confirms the negative case for the return value', () => {
        // Act
        const result = reverseString("hello");
    
        // Assert
        expect(result).not.toBe('car');
    });
});