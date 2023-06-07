import calculate from './calculateTest';

describe('Test for calculate function', () => {
  test("Returns an updated calculator data object when buttonName is 'AC'", () => {
    // Arrange
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';

    // Action
    const result = calculate(obj, buttonName);

    // Assert
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test("Updates 'next' when buttonName is a number", () => {
    // Arrange
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '7';

    // Action
    const result = calculate(obj, buttonName);

    // Assert
    expect(result).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });

  // Add more test cases for other logical blocks in the calculate function
});
