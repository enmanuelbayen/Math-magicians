import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Test for render of page Home', () => {
  test('renders Home', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
