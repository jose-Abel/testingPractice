describe('stringLength function', () => {
    test('returns the character count of the string pass as argument', () => {
        // Arrange
        const stringLength = require('./stringLength');
    
        // Act
        const result = stringLength("hello");
    
        //Assert
        expect(result).toBe(5);
    });
})
