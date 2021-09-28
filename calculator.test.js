describe('Calculator class the addition method', () => {
    // Arrange
    const Calculator = require('./Calculator');
    const calculator = new Calculator

    test('add method needs to return the adition of 2 numbers', () => {
        // Act
        const result = calculator.add(2, 5);
    
        // Assert
        expect(result).toBe(7);
    });

    test('add method needs to return the adition of more than 2 numbers', () => {
        // Act
        const result = calculator.add(2, 5, 8, 10, 3);
    
        // Assert
        expect(result).toBe(28);
    });

    test('add method needs to return the same number when there\'s only 1 number', () => {
        // Act
        const result = calculator.add(2);
    
        // Assert
        expect(result).toBe(2);
    });
});


describe('Calculator class the subtract method', () => {
    // Arrange
    const Calculator = require('./Calculator');
    const calculator = new Calculator

    test('subtract method needs to return the substraction of 2 numbers', () => {
        // Act
        const result = calculator.subtract(8, 5);
    
        // Assert
        expect(result).toBe(3);
    });

    test('subtract method needs to return the substraction of more than 2 numbers', () => {
        // Act
        const result = calculator.subtract(30, 4, 10, 1);
    
        // Assert
        expect(result).toBe(15);
    });

    test('subtract method needs to return the same number when there\'s only 1 number', () => {
        // Act
        const result = calculator.subtract(7);
    
        // Assert
        expect(result).toBe(7);
    });
});

describe('Calculator class the divide method', () => {
    // Arrange
    const Calculator = require('./Calculator');
    const calculator = new Calculator

    test('divide method needs to return the division of 2 numbers', () => {
        // Act
        const result = calculator.divide(25, 5);
    
        // Assert
        expect(result).toBe(5);
    });

    test('divide method needs to return the division of more than 2 numbers', () => {
        // Act
        const result = calculator.divide(200, 10, 5, 2);
    
        // Assert
        expect(result).toBe(2);
    });

    test('divide method needs to return the same number when there\'s only 1 number', () => {
        // Act
        const result = calculator.divide(8);
    
        // Assert
        expect(result).toBe(8);
    });
});


describe('Calculator class the multiply method', () => {
    // Arrange
    const Calculator = require('./Calculator');
    const calculator = new Calculator

    test('multiply method needs to return the multiplication of 2 numbers', () => {
        // Act
        const result = calculator.multiply(3, 3, 10, 2);
    
        // Assert
        expect(result).toBe(180);
    });

    test('multiply method needs to return the multiplication of more than 2 numbers', () => {
        // Act
        const result = calculator.multiply(5, 7, 12, 10);
    
        // Assert
        expect(result).toBe(4200);
    });

    test('multiply method needs to return the same number when there\'s only 1 number', () => {
        // Act
        const result = calculator.multiply(9);
    
        // Assert
        expect(result).toBe(9);
    });
});