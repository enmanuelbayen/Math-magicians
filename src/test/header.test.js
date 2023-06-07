import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  test('Renders the header with logo and navbar', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Renders children content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header>
          <div>Child content</div>
        </Header>
      </BrowserRouter>,
    );
    const childContent = getByText('Child content');
    expect(childContent).toBeInTheDocument();
  });
});
