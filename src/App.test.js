import { render } from '@testing-library/react';
import App from './App';

test.skip('renders the controls', () => {
  const container = render(<App />);
  expect(container).toBeInTheDocument();
});
