import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes component', () => {
  test('Renders correctly', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  test('Displays loading message while fetching quotes', () => {
    const { getByText } = render(<Quotes />);
    const loadingMessage = getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
    expect(loadingMessage).toMatchSnapshot();
  });

  test('Displays error message when quote fetch fails', () => {
    jest.spyOn(window, 'fetch').mockRejectedValueOnce(new Error('Fetch error'));
  
    const { getByText, queryByText } = render(<Quotes />);
    const loadingMessage = getByText('Loading...');
  
    expect(loadingMessage).toBeInTheDocument();
  
    setTimeout(() => {
      const errorMessage = queryByText('Ups... Quote is missing!');
  
      expect(loadingMessage).not.toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toMatchSnapshot();
    }, 0);
  });
});
