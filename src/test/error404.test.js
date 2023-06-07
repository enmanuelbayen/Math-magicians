import { render } from '@testing-library/react';
import Error404 from '../components/Error404';

describe('Test for render of page error 404', () => {
  test('renders Error404', () => {
    const { container } = render(<Error404 />);
    expect(container).toMatchSnapshot();
  });
});
