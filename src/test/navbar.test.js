import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('Renders the "Home" link', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/home');
  });
  test('Renders the "Calculator" link', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const calculatorLink = screen.getByText('Calculator');
    expect(calculatorLink).toBeInTheDocument();
    expect(calculatorLink.getAttribute('href')).toBe('/calculator');
  });
  test('Renders the "Quote" link', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const quoteLink = screen.getByText('Quote');
    expect(quoteLink).toBeInTheDocument();
    expect(quoteLink.getAttribute('href')).toBe('/quote');
  });
});
