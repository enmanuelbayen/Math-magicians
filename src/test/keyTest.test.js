import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Keys from '../components/Keys';

describe('Keys component', () => {
  test('Renders buttons correctly', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    const { container } = render(<Keys onClick={onClick} />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Triggers onClick handler when a button is clicked', () => {
    // Arrange
    const onClick = jest.fn();
    const { getByText } = render(<Keys onClick={onClick} />);
    const button = getByText('7');

    // Act
    fireEvent.click(button);

    // Assert
    expect(onClick).toHaveBeenCalledWith('7');
  });
});
