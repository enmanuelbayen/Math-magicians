import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('Renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  test('Handles button clicks correctly', () => {
    const { getByText } = render(<Calculator />);
    const button = getByText('7');

    fireEvent.click(button);

    expect(button).toMatchSnapshot();
  });
});
