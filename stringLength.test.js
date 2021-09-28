describe('stringLength function', () => {
    // Arrange
    const stringLength = require('./stringLength');

    test('returns the character count of the string pass as argument', () => {
        // Act
        const result = stringLength("hello");
    
        // Assert
        expect(result).toBe(5);
    });

    test('confirms the negative case for the return value', () => {
        // Act
        const result = stringLength("hello");
    
        // Assert
        expect(result).not.toBe(8);
    });

    test('check if string is at least one character long', () => {
        // Act
        const result = stringLength('');

        // Assert
        expect(result).toBe(false);

    });

    test('check if the string is no longer than 10 characters', () => {
        // Act
        const result = stringLength('longer than 10 characters');

        // Assert
        expect(result).toBe(false);
    })
});


