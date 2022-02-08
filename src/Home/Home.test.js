import { render } from '@testing-library/react';

import Home from './Home';

test.skip('rendering home page', () => {
  const container = render(<Home />);
  expect(container).toMatchSnapshot();
});
