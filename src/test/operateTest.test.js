const operate = require('./operateTest');

describe('Test for logic in operate function', () => {
    
    test('Operator logic work with the correct operate symbol', () => {
        // Arrange
        const a = 10;
        const b = 5;
        const operators = ['+', '-', 'x', '÷', '%'];
        let result = [];

        // Action
        operators.forEach(operator => {
        result.push(operate(a, b, operator));
          return result
        });
        // Assert
        expect(result).toEqual(['15', '5', '50', '2', '0'])
    });

    test('Test for try and catch of %', () => {
        const a = 10
        const b = 0
        const c = 2
        const operator = '%'


        let result = operate(a, b, operator)
        let result1 = operate(a, c, operator)

        expect(result1).toBe('0')
        expect(result).toBe("Can't find modulo as can't divide by 0.")
    })

});